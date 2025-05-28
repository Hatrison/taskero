import * as yup from "yup";

export const EditTaskSchema = yup.object({
  title: yup
    .string()
    .min(2, "Title must be at least 2 characters")
    .max(200, "Title must be at most 200 characters")
    .required(),

  description: yup
    .string()
    .max(2000, "Description must be at most 2000 characters")
    .nullable(),

  assignedTo: yup.array().of(yup.object().required()).optional(),

  priority: yup
    .string()
    .oneOf(["low", "medium", "high", "critical"])
    .optional(),

  deadline: yup.date().nullable().optional(),

  attachments: yup
    .array()
    .of(
      yup.object({
        url: yup.string().required(),
        file: yup.mixed().notRequired(),
      })
    )
    .optional(),
});
