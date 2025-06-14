import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import CreateProjectForm from "@/components/Forms/CreateProjectForm";

type Props = {
  handlerCloseModal: () => void;
};

const CreateProjectModal = ({ handlerCloseModal }: Props) => {
  const { t } = useTranslation();
  const formName = "create-project-form";

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Modals.createProject.title")}
        formName={formName}
      >
        <CreateProjectForm
          handlerCloseModal={handlerCloseModal}
          formName={formName}
        />
      </ModalLayout>
    </Modal>
  );
};

export default CreateProjectModal;
