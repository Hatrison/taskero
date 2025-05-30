import * as yup from "yup";

export const ChangePasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .min(6, "Current password must be at least 6 characters")
    .required("Current password is required"),

  newPassword: yup
    .string()
    .min(6, "New password must be at least 6 characters")
    .notOneOf(
      [yup.ref("currentPassword")],
      "New password must be different from current"
    )
    .required("New password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your new password"),
});
