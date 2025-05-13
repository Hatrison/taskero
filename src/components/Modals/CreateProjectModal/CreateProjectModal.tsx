import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import CreateProjectForm from "@/components/Forms/CreateProjectForm";
import {
  CancelButtonModal,
  SubmitButtonModal,
} from "@/styles/form/Form.styled";

type Props = {
  handlerCloseModal: () => void;
  hasDeleteAction?: boolean;
};

const CreateProjectModal = ({ handlerCloseModal }: Props) => {
  const { t } = useTranslation();

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Modals.createProject.title")}
        actions={
          <>
            <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
              <CancelButtonModal type="button" onClick={handlerCloseModal}>
                {t("Modals.common.cancel")}
              </CancelButtonModal>
              <SubmitButtonModal type="submit" form="create-project-form">
                {t("Modals.common.save")}
              </SubmitButtonModal>
            </div>
          </>
        }
      >
        <CreateProjectForm />
      </ModalLayout>
    </Modal>
  );
};

export default CreateProjectModal;
