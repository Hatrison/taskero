import * as yup from "yup";

export const createTaskSchema = yup.object({
  title: yup.string().min(2).max(200).required(),
  description: yup.string().max(2000).nullable(),
  assignedTo: yup.array().of(yup.string()),
  priority: yup
    .mixed<"low" | "medium" | "high" | "critical">()
    .oneOf(["low", "medium", "high", "critical"])
    .default("medium"),
  deadline: yup.date().nullable(),
});
