import { useEffect, useState } from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectUserEmail } from "@/redux/user/selectors";
import { fetchCompanyById, updateMembers } from "@/redux/companies/operations";
import { Company } from "@/redux/companies/companies.types";
import Loader from "@/components/Loader";
import UserList from "@/components/UserList";
import {
  StyledForm,
  Textarea,
  SubmitButtonModal,
} from "@/styles/form/Form.styled";
import { LoadContainer } from "./EditCompanyMembersForm.styled";
import { EditCompanyMembersSchema } from "./EditCompanyMembersSchema";

type Props = {
  handlerCloseModal: () => void;
  formName: string;
  companyId: string;
};

const EditCompanyMembersForm = ({
  handlerCloseModal,
  formName,
  companyId,
}: Props) => {
  const dispatch = useAppDispatch();
  const myEmail = useAppSelector(selectUserEmail);
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
    newMembers: "",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    const uniqueEmails = new Set([
      ...values.members,
      ...values.newMembers
        .split("\n")
        .map((email) => email.trim())
        .filter(Boolean),
    ]);

    try {
      await dispatch(
        updateMembers({ id: company._id, members: Array.from(uniqueEmails) })
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

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={EditCompanyMembersSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => {
        const handleAddMembers = () => {
          const newEmails = values.newMembers
            .split("\n")
            .map((email) => email.trim())
            .filter((email) => !!email && !values.members.includes(email));

          if (newEmails.length === 0) return;

          setFieldValue("members", [...values.members, ...newEmails]);
          setFieldValue("newMembers", "");
        };

        return (
          <StyledForm id={formName}>
            <UserList
              users={company.members.map((m) => {
                const role = m.email === myEmail ? "owner" : "member";

                return {
                  id: m._id,
                  name: m.name,
                  email: m.email,
                  role,
                  avatarUrl: m.avatar,
                };
              })}
              onRemove={(email) => {
                const updated = values.members.filter((e) => e !== email);
                setFieldValue("members", updated);
              }}
              canRemove={(role) => role !== "owner"}
            />

            <label>{t("Forms.editCompanyMembers.add")}</label>
            <Textarea
              name="newMembers"
              placeholder={t("Forms.editCompanyMembers.addPlaceholder")}
            />

            <SubmitButtonModal type="button" onClick={handleAddMembers}>
              {t("Forms.editCompanyMembers.add")}
            </SubmitButtonModal>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default EditCompanyMembersForm;
