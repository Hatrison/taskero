import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks";
import { updateTask } from "@/redux/tasks/operations";
import CustomSelect from "@/components/CustomSelect";
import AssigneeList from "@/components/AssigneeList";
// import AttachmentList from "@/components/AttachmentList";
import Loader from "@/components/Loader";
import { EditTaskSchema } from "./EditTaskSchema";
import { Task, TaskPriority } from "@/redux/tasks/tasks.types";
import {
  ErrorText,
  Input,
  InputContainer,
  Label,
  StyledForm,
  Textarea,
} from "@/styles/form/Form.styled";
import { LoadContainer } from "./EditTaskForm.styled";

type Props = {
  task: Task;
  handlerCloseModal: () => void;
  formName: string;
  withActions?: boolean;
};

const EditTaskForm = ({
  task,
  handlerCloseModal,
  formName,
  withActions = true,
}: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const initialValues = {
    title: task.title || "",
    description: task.description || "",
    column: task.column || "",
    priority: task.priority || "medium",
    assignedTo: task.assignedTo || [],
    deadline: task.deadline?.slice(0, 10) || "",
    attachments: task.attachments || [],
  };

  const priorityColors: Record<TaskPriority, string> = {
    low: "#4CAF50",
    medium: "#FF9800",
    high: "#F44336",
    critical: "#9C27B0",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("description", values.description || "");
      formData.append("priority", values.priority);
      formData.append("deadline", values.deadline || "");

      const assignedToIds = values.assignedTo.map((user) => user._id);
      formData.append("assignedTo", JSON.stringify(assignedToIds));

      formData.append("attachments", JSON.stringify(values.attachments));

      await dispatch(updateTask({ id: task._id, formData })).unwrap();

      toast.success(t("Forms.editTask.success") as string);
      handlerCloseModal();
    } catch (error) {
      toast.error(
        `${t("Forms.editTask.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  if (!task) {
    return (
      <LoadContainer>
        <Loader size="60px" color="#3e85f3" />
      </LoadContainer>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EditTaskSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
      }) => (
        <StyledForm id={formName}>
          <InputContainer>
            <Label>{t("Forms.editTask.title")}</Label>
            <Input
              name="title"
              placeholder={t("Forms.editTask.titlePlaceholder")}
              $hasError={touched.title && !!errors.title}
              disabled={!withActions}
            />
            {touched.title && errors.title && (
              <ErrorText>{errors.title}</ErrorText>
            )}
          </InputContainer>

          <InputContainer>
            <Label>{t("Forms.editTask.description")}</Label>
            <Textarea
              name="description"
              placeholder={t("Forms.editTask.descriptionPlaceholder")}
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              $hasError={touched.description && !!errors.description}
              disabled={!withActions}
            />
            {touched.description && errors.description && (
              <ErrorText>{errors.description}</ErrorText>
            )}
          </InputContainer>

          <InputContainer>
            <Label>{t("Forms.editTask.priority")}</Label>
            <CustomSelect
              options={["low", "medium", "high", "critical"]}
              value={values.priority}
              onChange={(val) => setFieldValue("priority", val)}
              getLabel={(p) => t(`Common.priority.${p}`)}
              getKey={(p) => p}
              getColor={(p) => priorityColors[p as TaskPriority]}
              placeholder={t("Forms.editTask.priority")}
              disabled={!withActions}
            />
          </InputContainer>

          <InputContainer>
            <Label>{t("Forms.editTask.assignedTo")}</Label>
            <AssigneeList
              value={values.assignedTo}
              onChange={(newValue) => setFieldValue("assignedTo", newValue)}
              placeholder={t("Forms.editTask.assigneePlaceholder")}
            />
          </InputContainer>

          <InputContainer>
            <Label>{t("Forms.editTask.deadline")}</Label>
            <Input
              name="deadline"
              type="date"
              value={values.deadline}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={!withActions}
            />
          </InputContainer>

          <InputContainer>
            <Label>{t("Forms.editTask.attachments")}</Label>
            {/* <AttachmentList
              files={values.attachments}
              editable={withActions}
              onChange={(updated) => setFieldValue("attachments", updated)}
            /> */}
          </InputContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default EditTaskForm;
