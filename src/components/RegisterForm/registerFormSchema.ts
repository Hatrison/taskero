import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms"),
});
