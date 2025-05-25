import * as yup from "yup";

export const EditCompanyMembersSchema = yup.object().shape({
  members: yup.array().of(yup.string().email()).min(1).required(),
});
