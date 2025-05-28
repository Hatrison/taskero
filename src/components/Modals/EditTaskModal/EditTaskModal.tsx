import { useTranslation } from "react-i18next";
import { Task } from "@/redux/tasks/tasks.types";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import EditTaskForm from "@/components/Forms/EditTaskForm";

type Props = {
  task: Task;
  handlerCloseModal: () => void;
  deleteAction?: () => void;
  withActions?: boolean;
};

const EditTaskModal = ({
  task,
  handlerCloseModal,
  deleteAction = () => {},
  withActions = true,
}: Props) => {
  const { t } = useTranslation();
  const formName = "edit-task-form";

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Modals.editTask.title")}
        formName={formName}
        deleteAction={deleteAction}
        withActions={withActions}
      >
        <EditTaskForm
          task={task}
          handlerCloseModal={handlerCloseModal}
          formName={formName}
          withActions={withActions}
        />
      </ModalLayout>
    </Modal>
  );
};

export default EditTaskModal;
