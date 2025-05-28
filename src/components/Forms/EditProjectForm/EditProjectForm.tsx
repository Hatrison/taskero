import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { updateProject } from "@/redux/projects/operations";
import { selectCurrentProject } from "@/redux/projects/selectors";
import Loader from "@/components/Loader";
import { FormikSubmitObserver } from "@/components/Modal";
import { EditProjectSchema } from "./EditProjectSchema";
import { LoadContainer } from "./EditProjectForm.styled";
import {
  ErrorText,
  Input,
  InputContainer,
  Label,
  StyledForm,
  Textarea,
} from "@/styles/form/Form.styled";

type Props = {
  handlerCloseModal: () => void;
  formName: string;
  withActions?: boolean;
};

const EditProjectForm = ({
  handlerCloseModal,
  formName,
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

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await dispatch(
        updateProject({ id: project._id, payload: values })
      ).unwrap();
      toast.success(t("Forms.editProject.success") as string);
      handlerCloseModal();
    } catch (error) {
      toast.error(
        `${t("Forms.editProject.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  const initialValues = {
    name: project.name || "",
    description: project.description || "",
    deadline: project.deadline ? project.deadline.slice(0, 10) : "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EditProjectSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <>
          <FormikSubmitObserver />

          <StyledForm id={formName}>
            <InputContainer>
              <Label>{t("Forms.editProject.name")}</Label>
              <Input
                name="name"
                placeholder={t("Forms.editProject.namePlaceholder")}
                $hasError={touched.name && !!errors.name}
                disabled={!withActions}
              />
              {touched.name && errors.name && (
                <ErrorText>{errors.name}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label>{t("Forms.editProject.description")}</Label>
              <Textarea
                name="description"
                placeholder={t("Forms.editProject.descriptionPlaceholder")}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                $hasError={touched.description && !!errors.description}
                disabled={!withActions}
              />
              {touched.description && errors.description && (
                <ErrorText>{errors.description}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label>{t("Forms.editProject.deadline")}</Label>
              <Input name="deadline" type="date" disabled={!withActions} />
            </InputContainer>
          </StyledForm>
        </>
      )}
    </Formik>
  );
};

export default EditProjectForm;
