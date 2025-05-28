import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { updateProjectMembers } from "@/redux/projects/operations";
import { selectCurrentProject } from "@/redux/projects/selectors";
import Loader from "@/components/Loader";
import UserList from "@/components/UserList";
import { FormikSubmitObserver } from "@/components/Modal";
import { StyledForm } from "@/styles/form/Form.styled";
import { LoadContainer } from "./EditProjectMembersForm.styled";
import { EditProjectMembersSchema } from "./EditProjectMembersSchema";

type Props = {
  handlerCloseModal: () => void;
  formName: string;
  projectId: string;
  withActions?: boolean;
};

const EditProjectMembersForm = ({
  handlerCloseModal,
  formName,
  projectId,
  withActions = true,
}: Props) => {
  const dispatch = useAppDispatch();
  const project = useAppSelector(selectCurrentProject);
  const { t } = useTranslation();

  if (!project) {
    return (
      <LoadContainer>
        <Loader size="60px" color="#3e85f3" />
      </LoadContainer>
    );
  }

  const initialValues = {
    members: project.members.map((m) => ({
      email: m.user.email,
      role: m.role,
    })),
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await dispatch(
        updateProjectMembers({ id: projectId, members: values.members })
      ).unwrap();

      toast.success(t("Forms.editProjectMembers.success") as string);
      handlerCloseModal();
    } catch (error) {
      toast.error(
        `${t("Forms.editProjectMembers.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  const companyMembersWithRoles = project.members.map((member) => ({
    ...member.user,
    role: member.role,
  }));

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={EditProjectMembersSchema}
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
                editableRoles
                availableRoles={["owner", "editor", "viewer"]}
              />
            </StyledForm>
          </>
        );
      }}
    </Formik>
  );
};

export default EditProjectMembersForm;
