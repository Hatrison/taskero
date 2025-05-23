import { Formik } from "formik";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/hooks";
import { createCompany } from "@/redux/companies/operations";
import ImageUploadField from "@/components/ImageUploadField";
import {
  StyledForm,
  InputContainer,
  Label,
  Input,
  ErrorText,
} from "@/styles/form/Form.styled";
import { CreateCompanySchema } from "./CreateCompanySchema";

type Props = {
  handlerCloseModal: () => void;
  formName: string;
};

const initialValues = {
  name: "",
  logo: null as File | null,
};

const CreateCompanyForm = ({ handlerCloseModal, formName }: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleSubmit = async (values: typeof initialValues) => {
    const formData = new FormData();
    formData.append("name", values.name);

    if (values.logo) {
      formData.append("logo", values.logo);
    }

    try {
      await dispatch(createCompany(formData));
      toast.success(t("Forms.createCompany.success") as string);
      handlerCloseModal();
    } catch (error) {
      toast.error(
        `${t("Forms.createCompany.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreateCompanySchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <StyledForm id={formName}>
          <InputContainer>
            <Label>{t("Forms.createCompany.name")}</Label>
            <Input
              name="name"
              placeholder={t("Forms.createCompany.namePlaceholder")}
              $hasError={touched.name && !!errors.name}
            />
            {touched.name && errors.name && (
              <ErrorText>{errors.name}</ErrorText>
            )}
          </InputContainer>

          <InputContainer>
            <Label>{t("Forms.createCompany.logo")}</Label>
            <ImageUploadField
              name="logo"
              placeholderText={t("Forms.common.dragOrClick")}
              buttonText={t("Forms.common.chooseFile")}
            />
          </InputContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default CreateCompanyForm;
