import * as yup from "yup";

export const EditCompanySchema = yup.object({
  name: yup.string().required("Required"),
  logo: yup.mixed().nullable(),
});
