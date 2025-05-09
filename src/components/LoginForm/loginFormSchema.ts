import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .matches(/[a-z]/, "Must include lowercase")
    .matches(/[A-Z]/, "Must include uppercase")
    .matches(/[0-9]/, "Must include number")
    .required("Required"),
});
