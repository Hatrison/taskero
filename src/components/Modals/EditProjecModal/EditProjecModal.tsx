import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import EditProjectForm from "@/components/Forms/EditProjectForm";

type Props = {
  handlerCloseModal: () => void;
  projectId: string;
  deleteAction?: () => void;
  withActions?: boolean;
};

const EditProjectModal = ({
  handlerCloseModal,
  projectId,
  deleteAction = () => {},
  withActions = true,
}: Props) => {
  const { t } = useTranslation();
  const formName = "edit-project-form";

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Modals.EditProject.title")}
        formName={formName}
        deleteAction={deleteAction}
        withActions={withActions}
      >
        <EditProjectForm
          handlerCloseModal={handlerCloseModal}
          formName={formName}
          projectId={projectId}
          withActions={withActions}
        />
      </ModalLayout>
    </Modal>
  );
};

export default EditProjectModal;
