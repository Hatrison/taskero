import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import EditProjectMembersForm from "@/components/Forms/EditProjectMembersForm";

type Props = {
  handlerCloseModal: () => void;
  projectId: string;
  withActions?: boolean;
};

const EditProjectMembersModal = ({
  handlerCloseModal,
  projectId,
  withActions = true,
}: Props) => {
  const { t } = useTranslation();
  const formName = "edit-project-members-form";

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Modals.editProjectMembers.title")}
        formName={formName}
        withActions={withActions}
      >
        <EditProjectMembersForm
          handlerCloseModal={handlerCloseModal}
          formName={formName}
          projectId={projectId}
          withActions={withActions}
        />
      </ModalLayout>
    </Modal>
  );
};

export default EditProjectMembersModal;
