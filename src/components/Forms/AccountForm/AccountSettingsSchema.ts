import * as yup from "yup";

export const AccountSettingsSchema = yup.object().shape({
  fullName: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  avatarFile: yup.mixed().nullable(),
});
