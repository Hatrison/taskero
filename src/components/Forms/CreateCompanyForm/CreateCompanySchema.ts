import * as yup from "yup";

export const CreateCompanySchema = yup.object({
  name: yup.string().required("Required"),
  logo: yup.mixed().nullable(),
});
