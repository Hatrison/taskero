import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectCurrentCompany } from "@/redux/companies/selectors";
import { createProject } from "@/redux/projects/operations";
import { ProjectRole } from "@/redux/projects/projects.types";
import { selectUser } from "@/redux/user/selectors";
import { FormikSubmitObserver } from "@/components/Modal";
import { CreateProjectSchema } from "./createProjectSchema";
import {
  StyledForm,
  InputContainer,
  Label,
  Input,
  ErrorText,
  Textarea,
} from "@/styles/form/Form.styled";

type Props = {
  handlerCloseModal: () => void;
  formName?: string;
};

const initialValues = {
  name: "",
  description: "",
  deadline: "",
};

const CreateProjectForm = ({ handlerCloseModal, formName }: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const company = useAppSelector(selectCurrentCompany);
  const user = useAppSelector(selectUser);

  const handleSubmit = async (values: typeof initialValues) => {
    if (!company?._id || !user?.email) {
      toast.error(t("Forms.createProject.failed") as string);
      return;
    }

    const payload = {
      ...values,
      company: company._id,
      members: [{ email: user.email, role: "owner" as ProjectRole }],
    };

    try {
      await dispatch(createProject(payload)).unwrap();
      toast.success(t("Forms.createProject.success") as string);
      handlerCloseModal();
    } catch (error) {
      toast.error(
        `${t("Forms.createProject.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreateProjectSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <>
          <FormikSubmitObserver />

          <StyledForm id={formName}>
            <InputContainer>
              <Label>{t("Forms.createProject.name")}</Label>
              <Input
                name="name"
                placeholder={t("Forms.createProject.namePlaceholder")}
                $hasError={touched.name && !!errors.name}
              />
              {touched.name && errors.name && (
                <ErrorText>{errors.name}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label>{t("Forms.createProject.description")}</Label>
              <Textarea
                name="description"
                placeholder={t("Forms.createProject.descriptionPlaceholder")}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                $hasError={touched.description && !!errors.description}
              />
              {touched.description && errors.description && (
                <ErrorText>{errors.description}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label>{t("Forms.createProject.deadline")}</Label>
              <Input name="deadline" type="date" />
            </InputContainer>
          </StyledForm>
        </>
      )}
    </Formik>
  );
};

export default CreateProjectForm;
