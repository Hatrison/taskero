import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { createTask } from "@/redux/tasks/operations";
import { selectCurrentProject } from "@/redux/projects/selectors";
import { UserBase } from "@/redux/user/user.types";
import { TaskPriority } from "@/redux/tasks/tasks.types";
import CustomSelect from "@/components/CustomSelect";
import AssigneeList from "@/components/AssigneeList";
import { FormikSubmitObserver } from "@/components/Modal";
import { createTaskSchema } from "./CreateTaskSchema";
import {
  StyledForm,
  InputContainer,
  Label,
  Input,
  ErrorText,
  Textarea,
} from "@/styles/form/Form.styled";

type Props = {
  handlerCloseModal: () => void;
  formName: string;
  columnId?: string;
};

const initialValues = {
  title: "",
  description: "",
  deadline: "",
  priority: "medium",
};

const CreateTaskForm = ({ handlerCloseModal, formName, columnId }: Props) => {
  const dispatch = useAppDispatch();
  const project = useAppSelector(selectCurrentProject);
  const [assignees, setAssignees] = useState<UserBase[]>([]);
  const { t } = useTranslation();
  const theme = useTheme();

  const priorityColors: Record<TaskPriority, string> = {
    low: theme.priorityTextLow,
    medium: theme.priorityTextMedium,
    high: theme.priorityTextHigh,
    critical: theme.priorityTextCritical,
  };

  const handleSubmit = async (values: typeof initialValues) => {
    if (!project?._id || !columnId) {
      toast.error(t("Forms.createTask.failed") as string);
      return;
    }

    const payload = {
      ...values,
      project: project._id,
      column: columnId,
      assignedTo: assignees.map((u) => u._id),
      priority: values.priority as TaskPriority,
    };

    try {
      await dispatch(createTask(payload)).unwrap();
      toast.success(t("Forms.createTask.success") as string);
      handlerCloseModal();
    } catch (error) {
      toast.error(
        `${t("Forms.createTask.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createTaskSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <>
          <FormikSubmitObserver />

          <StyledForm id={formName}>
            <InputContainer>
              <Label>{t("Forms.createTask.title")}</Label>
              <Input
                name="title"
                placeholder={t("Forms.createTask.titlePlaceholder")}
                $hasError={touched.title && !!errors.title}
              />
              {touched.title && errors.title && (
                <ErrorText>{errors.title}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label>{t("Forms.createTask.description")}</Label>
              <Textarea
                name="description"
                placeholder={t("Forms.createTask.descriptionPlaceholder")}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                $hasError={touched.description && !!errors.description}
              />
              {touched.description && errors.description && (
                <ErrorText>{errors.description}</ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <Label>{t("Forms.createTask.deadline")}</Label>
              <Input name="deadline" type="date" />
            </InputContainer>

            <InputContainer>
              <Label>{t("Forms.createTask.priority")}</Label>
              <CustomSelect
                options={["low", "medium", "high", "critical"]}
                value={values.priority as TaskPriority}
                onChange={(value) => {
                  handleChange({
                    target: { name: "priority", value },
                  });
                }}
                getLabel={(p) => t(`Common.priority.${p}`)}
                getKey={(p) => p}
                getColor={(p) => priorityColors[p as TaskPriority]}
                placeholder={t("Forms.createTask.priority")}
              />
            </InputContainer>

            <InputContainer>
              <Label>{t("Forms.createTask.assignedTo")}</Label>
              <AssigneeList
                value={assignees}
                onChange={setAssignees}
                placeholder={t("Forms.createTask.assigneePlaceholder")}
                withActions
              />
            </InputContainer>
          </StyledForm>
        </>
      )}
    </Formik>
  );
};

export default CreateTaskForm;
