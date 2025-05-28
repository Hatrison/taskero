import { useEffect, useState } from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks";
import { fetchCompanyById, updateMembers } from "@/redux/companies/operations";
import { Company } from "@/redux/companies/companies.types";
import Loader from "@/components/Loader";
import UserList from "@/components/UserList";
import { FormikSubmitObserver } from "@/components/Modal";
import { StyledForm } from "@/styles/form/Form.styled";
import { LoadContainer } from "./EditCompanyMembersForm.styled";
import { EditCompanyMembersSchema } from "./EditCompanyMembersSchema";

type Props = {
  handlerCloseModal: () => void;
  formName: string;
  companyId: string;
  withActions?: boolean;
};

const EditCompanyMembersForm = ({
  handlerCloseModal,
  formName,
  companyId,
  withActions = true,
}: Props) => {
  const dispatch = useAppDispatch();
  const [company, setCompany] = useState<Company | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const loadCompany = async () => {
      try {
        const result = await dispatch(fetchCompanyById(companyId)).unwrap();
        setCompany(result);
      } catch (error) {
        toast.error(
          `${t("Forms.editCompanyMembers.failedToLoad")}: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
        handlerCloseModal();
      }
    };

    loadCompany();
  }, [dispatch, companyId, t, handlerCloseModal]);

  if (!company) {
    return (
      <LoadContainer>
        <Loader size="60px" color="#3e85f3" />
      </LoadContainer>
    );
  }

  const initialValues = {
    members: company.members.map((m) => m.email),
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await dispatch(
        updateMembers({ id: company._id, members: values.members })
      ).unwrap();

      toast.success(t("Forms.editCompanyMembers.success") as string);
      handlerCloseModal();
    } catch (error) {
      toast.error(
        `${t("Forms.editCompanyMembers.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  const companyMembersWithRoles = company.members.map((member) => ({
    ...member,
    role:
      company.owner.email === member.email
        ? ("owner" as const)
        : ("member" as const),
  }));

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={EditCompanyMembersSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => {
        return (
          <>
            <FormikSubmitObserver />

            <StyledForm id={formName}>
              <UserList
                value={values.members}
                users={companyMembersWithRoles}
                onChange={(updated) => setFieldValue("members", updated)}
                withActions={withActions}
              />
            </StyledForm>
          </>
        );
      }}
    </Formik>
  );
};

export default EditCompanyMembersForm;
