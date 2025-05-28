import * as yup from "yup";

export const CommentsSchema = yup.object().shape({
  text: yup.string().trim().required("Cannot be empty"),
});
