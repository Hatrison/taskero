import { useEffect, useState } from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks";
import { fetchCompanyById, updateCompany } from "@/redux/companies/operations";
import { Company } from "@/redux/companies/companies.types";
import Loader from "@/components/Loader";
import ImageUploadField from "@/components/ImageUploadField";
import {
  StyledForm,
  InputContainer,
  Label,
  Input,
  ErrorText,
} from "@/styles/form/Form.styled";
import { LoadContainer } from "./EditCompanyForm.styled";
import { EditCompanySchema } from "./EditCompanySchema";

type Props = {
  handlerCloseModal: () => void;
  formName: string;
  companyId: string;
};

const EditCompanyForm = ({ handlerCloseModal, formName, companyId }: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    const loadCompany = async () => {
      try {
        const result = await dispatch(fetchCompanyById(companyId)).unwrap();
        setCompany(result);
      } catch (error) {
        toast.error(
          `${t("Forms.editCompany.failedToLoad")}: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
        handlerCloseModal();
      }
    };

    loadCompany();
  }, [dispatch, companyId, t, handlerCloseModal]);

  const initialValues = {
    name: company?.name || "",
    logo: null as File | null,
  };

  const handleSubmit = async (values: typeof initialValues) => {
    const formData = new FormData();
    formData.append("name", values.name);

    if (values.logo) {
      formData.append("logo", values.logo);
    }

    try {
      await dispatch(updateCompany({ id: companyId, formData })).unwrap();
      toast.success(t("Forms.editCompany.success") as string);
      handlerCloseModal();
    } catch (error) {
      toast.error(
        `${t("Forms.editCompany.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  return !company ? (
    <LoadContainer>
      <Loader size="60px" color="#3e85f3" />
    </LoadContainer>
  ) : (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={EditCompanySchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <StyledForm id={formName}>
          <InputContainer>
            <Label>{t("Forms.editCompany.name")}</Label>
            <Input
              name="name"
              placeholder={t("Forms.editCompany.namePlaceholder")}
              $hasError={touched.name && !!errors.name}
            />
            {touched.name && errors.name && (
              <ErrorText>{errors.name}</ErrorText>
            )}
          </InputContainer>

          <InputContainer>
            <Label>{t("Forms.editCompany.logo")}</Label>
            <ImageUploadField
              name="logo"
              placeholderText={t("Forms.common.dragOrClick")}
              buttonText={t("Forms.common.chooseFile")}
              initialPreview={company.logo}
            />
          </InputContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default EditCompanyForm;
