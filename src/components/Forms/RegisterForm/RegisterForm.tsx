import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@/redux/auth/operations";
import { useAppDispatch } from "@/hooks";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { registerFormSchema } from "./registerFormSchema";
import { useTranslation } from "react-i18next";
import {
  Wrapper,
  StyledForm,
  InputContainer,
  Label,
  Input,
  InputWrapper,
  TogglePassword,
  SubmitButton,
  CheckboxRow,
  CustomCheckbox,
  ErrorText,
  TermsLink,
} from "@/styles/form/Form.styled";

const initialValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (values: typeof initialValues, actions: any) => {
    try {
      const { terms, ...payload } = values;
      await dispatch(registerUser(payload)).unwrap();
      actions.resetForm();
      navigate("/", { replace: true });
    } catch {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={registerFormSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit, touched, errors }) => (
          <StyledForm onSubmit={handleSubmit}>
            <InputContainer>
              <Label htmlFor="name">{t("Auth.fullName")}</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={t("Auth.fullNamePlaceholder")}
                $hasError={touched.name && !!errors.name}
              />
              {touched.name && errors.name && (
                <ErrorText>{errors.name}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label htmlFor="email">{t("Auth.email")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t("Auth.emailPlaceholder")}
                $hasError={touched.email && !!errors.email}
              />
              {touched.email && errors.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label htmlFor="password">{t("Auth.password")}</Label>
              <InputWrapper>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t("Auth.passwordPlaceholder")}
                  $hasError={touched.password && !!errors.password}
                />
                <TogglePassword
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </TogglePassword>
              </InputWrapper>
              {touched.password && errors.password && (
                <ErrorText>{errors.password}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <CheckboxRow>
                <CustomCheckbox>
                  <input
                    type="checkbox"
                    name="terms"
                    checked={values.terms}
                    onChange={handleChange}
                  />
                  <span id="custom-checkbox" />
                  <p>
                    {t("Auth.agree")}{" "}
                    <TermsLink to="/terms">{t("Auth.terms")}</TermsLink>
                  </p>
                </CustomCheckbox>
              </CheckboxRow>
              {touched.terms && errors.terms && (
                <ErrorText>{errors.terms}</ErrorText>
              )}
            </InputContainer>

            <SubmitButton type="submit">{t("Auth.createAccount")}</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default RegisterForm;
