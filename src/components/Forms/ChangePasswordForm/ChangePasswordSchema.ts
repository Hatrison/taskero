import * as Yup from "yup";

export const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, "Current password must be at least 6 characters")
    .required("Current password is required"),

  newPassword: Yup.string()
    .min(6, "New password must be at least 6 characters")
    .notOneOf(
      [Yup.ref("currentPassword")],
      "New password must be different from current"
    )
    .required("New password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your new password"),
});
