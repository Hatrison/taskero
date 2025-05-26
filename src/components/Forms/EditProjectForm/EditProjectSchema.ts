import * as yup from "yup";

export const EditProjectSchema = yup.object({
  name: yup.string().min(2).max(100).required("Required"),
  description: yup.string().max(1000),
  deadline: yup.date().nullable(),
});
