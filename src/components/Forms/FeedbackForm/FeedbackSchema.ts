import * as yup from "yup";

export const FeedbackSchema = yup.object().shape({
  rating: yup
    .number()
    .integer("Rating must be an integer")
    .min(1, "Rating must be between 1 and 5")
    .max(5, "Rating must be between 1 and 5")
    .required("Rating is required"),
  text: yup
    .string()
    .min(5, "Review must be at least 5 characters")
    .max(2000, "Review must be at most 2000 characters")
    .required("Text is required"),
});
