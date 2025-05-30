import { useState, useRef } from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { updateUser } from "@/redux/user/operations";
import { selectUser } from "@/redux/user/selectors";
import Loader from "@/components/Loader";
import { FaPlus } from "react-icons/fa";
import { AccountSettingsSchema } from "./AccountSettingsSchema";
import {
  ErrorText,
  Input,
  InputContainer,
  Label,
  StyledForm,
  SubmitButton,
} from "@/styles/form/Form.styled";
import {
  UpperBlock,
  AvatarWrapper,
  AvatarImage,
  UploadButton,
  HiddenFileInput,
  ChangePasswordButton,
  DisabledInput,
} from "./AccountForm.styled";
import ChangePasswordModal from "@/components/Modals/ChangePasswordModal";

const AccountForm = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>(user.avatar || "");
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();

  const initialValues = {
    fullName: user.name,
    email: user.email,
    avatarFile: null,
  };

  const toggleChangePasswordModal = () => {
    setChangePasswordModalOpen((prev) => !prev);
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const formData = new FormData();
      formData.append("name", values.fullName);
      if (values.avatarFile) {
        formData.append("avatar", values.avatarFile);
      }

      await dispatch(updateUser(formData)).unwrap();
    } catch (error) {
      toast.error(
        `${t("Forms.account.updateFailed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={AccountSettingsSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched, setFieldValue, isSubmitting }) => (
          <StyledForm>
            <UpperBlock>
              <AvatarWrapper>
                <AvatarImage src={avatarPreview} />
                <UploadButton
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <FaPlus size={12} />
                </UploadButton>
                <HiddenFileInput
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setFieldValue("avatarFile", file);
                    if (file) {
                      setAvatarPreview(URL.createObjectURL(file));
                    }
                  }}
                />
              </AvatarWrapper>

              <ChangePasswordButton
                type="button"
                onClick={toggleChangePasswordModal}
              >
                {t("Forms.account.changePassword")}
              </ChangePasswordButton>
            </UpperBlock>

            <InputContainer>
              <Label>{t("Forms.account.fullName")}</Label>
              <Input
                name="fullName"
                placeholder={t("Forms.account.fullNamePlaceholder")}
                $hasError={Boolean(touched.fullName && errors.fullName)}
              />
              {touched.fullName && errors.fullName && (
                <ErrorText>{errors.fullName}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label>{t("Forms.account.email")}</Label>
              <DisabledInput name="email" disabled />
            </InputContainer>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader size="18px" color={theme.buttonText} />
              ) : (
                t("Forms.account.saveChanges")
              )}
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>

      {changePasswordModalOpen && (
        <ChangePasswordModal handlerCloseModal={toggleChangePasswordModal} />
      )}
    </>
  );
};

export default AccountForm;
