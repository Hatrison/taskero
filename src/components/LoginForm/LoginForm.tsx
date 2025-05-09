import { Formik } from "formik";
import { useState } from "react";
import { loginFormSchema } from "./loginFormSchema";
import { useAppDispatch } from "@/hooks";
import { loginUser } from "@/redux/auth/operations";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  Wrapper,
  StyledForm,
  InputContainer,
  Label,
  InputWrapper,
  Input,
  TogglePassword,
  SubmitButton,
  CheckboxRow,
  CustomCheckbox,
  ForgotLink,
  ErrorText,
} from "@/components/AuthLayout/AuthForm.styled";

const initialValues = {
  email: "",
  password: "",
  remember: true,
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values: typeof initialValues, actions: any) => {
    try {
      await dispatch(
        loginUser({ email: values.email, password: values.password })
      ).unwrap();
      actions.resetForm();
    } catch {
      toast.error("Invalid email or password");
    }
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginFormSchema}
      >
        {({ values, handleChange, handleSubmit, touched, errors }) => (
          <StyledForm onSubmit={handleSubmit}>
            <InputContainer>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                $hasError={touched.email && !!errors.email}
              />
              {touched.email && errors.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label htmlFor="password">Password</Label>
              <InputWrapper>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  $hasError={touched.password && !!errors.password}
                />
                <TogglePassword
                  onClick={() => setShowPassword((prev) => !prev)}
                  type="button"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </TogglePassword>
              </InputWrapper>
              {touched.password && errors.password && (
                <ErrorText>{errors.password}</ErrorText>
              )}
            </InputContainer>

            <CheckboxRow>
              <CustomCheckbox>
                <input
                  type="checkbox"
                  name="remember"
                  checked={values.remember}
                  onChange={handleChange}
                />
                <span />
                Remember me
              </CustomCheckbox>

              <ForgotLink to="/password">Forgot password?</ForgotLink>
            </CheckboxRow>

            <SubmitButton type="submit">Sign In</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default LoginForm;
