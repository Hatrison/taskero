import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import CreateTaskForm from "@/components/Forms/CreateTaskForm";

type Props = {
  handlerCloseModal: () => void;
  columnId?: string;
};

const CreateTaskModal = ({ handlerCloseModal, columnId }: Props) => {
  const { t } = useTranslation();
  const formName = "create-task-form";

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Modals.createTask.title")}
        formName={formName}
      >
        <CreateTaskForm
          handlerCloseModal={handlerCloseModal}
          formName={formName}
          columnId={columnId}
        />
      </ModalLayout>
    </Modal>
  );
};

export default CreateTaskModal;
