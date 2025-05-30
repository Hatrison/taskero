import { Formik } from "formik";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/hooks";
import { FormikSubmitObserver } from "@/components/Modal";
import { ChangePasswordSchema } from "./ChangePasswordSchema";
import {
  StyledForm,
  InputContainer,
  Label,
  Input,
  ErrorText,
} from "@/styles/form/Form.styled";
import { changePassword } from "@/redux/user/operations";

type Props = {
  handlerCloseModal: () => void;
  formName: string;
};

const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const ChangePasswordForm = ({ handlerCloseModal, formName }: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await dispatch(
        changePassword({
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        })
      ).unwrap();

      toast.success(t("Forms.account.changePasswordSuccess") as string);
      handlerCloseModal();
    } catch (error) {
      toast.error(
        `${t("Forms.account.changePasswordFailed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ChangePasswordSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <>
          <FormikSubmitObserver />

          <StyledForm id={formName}>
            <InputContainer>
              <Label>{t("Forms.account.currentPassword")}</Label>
              <Input
                name="currentPassword"
                type="password"
                placeholder={t("Forms.account.currentPasswordPlaceholder")}
                autoComplete="current-password"
              />
              {touched.currentPassword && errors.currentPassword && (
                <ErrorText>{errors.currentPassword}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label>{t("Forms.account.newPassword")}</Label>
              <Input
                name="newPassword"
                type="password"
                placeholder={t("Forms.account.newPasswordPlaceholder")}
                autoComplete="new-password"
              />
              {touched.newPassword && errors.newPassword && (
                <ErrorText>{errors.newPassword}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label>{t("Forms.account.confirmNewPassword")}</Label>
              <Input
                name="confirmPassword"
                type="password"
                placeholder={t("Forms.account.confirmNewPasswordPlaceholder")}
                autoComplete="new-password"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <ErrorText>{errors.confirmPassword}</ErrorText>
              )}
            </InputContainer>
          </StyledForm>
        </>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
