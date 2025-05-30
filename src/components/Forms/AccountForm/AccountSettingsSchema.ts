import * as Yup from "yup";

export const AccountSettingsSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  avatarFile: Yup.mixed().nullable(),
});
