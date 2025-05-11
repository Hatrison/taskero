import { Formik } from "formik";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectCurrentCompany } from "@/redux/companies/selectors";
import { createProject } from "@/redux/projects/operations";
import { ProjectRole } from "@/redux/projects/projects.types";
import { selectUser } from "@/redux/user/selectors";
import { CreateProjectSchema } from "./createProjectFormSchema";
import {
  WrapperModal,
  StyledForm,
  InputContainer,
  Label,
  Input,
  ErrorText,
  Textarea,
} from "@/styles/form/Form.styled";

type Props = {
  onSubmit?: (data: any) => void;
};

const initialValues = {
  name: "",
  description: "",
  deadline: "",
};

const CreateProjectForm = ({ onSubmit }: Props) => {
  const dispatch = useAppDispatch();
  const company = useAppSelector(selectCurrentCompany);
  const user = useAppSelector(selectUser);

  const handleSubmit = async (values: typeof initialValues) => {
    const payload = {
      ...values,
      company: company!._id,
      members: [{ email: user!.email, role: "owner" as ProjectRole }],
    };

    try {
      await dispatch(createProject(payload)).unwrap();
      onSubmit?.(values);
    } catch (error) {
      toast.error(
        `Failed to create project: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  return (
    <WrapperModal>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateProjectSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <StyledForm id="create-project-form">
            <InputContainer>
              <Label>Project name</Label>
              <Input
                name="name"
                placeholder="Enter project name"
                $hasError={touched.name && !!errors.name}
              />
              {touched.name && errors.name && (
                <ErrorText>{errors.name}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label>Project description</Label>
              <Textarea
                name="description"
                placeholder="Enter description (optional)"
              />
              {touched.description && errors.description && (
                <ErrorText>{errors.description}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label>Deadline (optional)</Label>
              <Input name="deadline" type="date" />
            </InputContainer>
          </StyledForm>
        )}
      </Formik>
    </WrapperModal>
  );
};

export default CreateProjectForm;
