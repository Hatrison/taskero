import * as yup from "yup";

export const EditProjectMembersSchema = yup.object().shape({
  members: yup
    .array()
    .of(
      yup.object().shape({
        email: yup.string().email().required(),
        role: yup.string().oneOf(["owner", "editor", "viewer"]).required(),
      })
    )
    .min(1)
    .required(),
});
