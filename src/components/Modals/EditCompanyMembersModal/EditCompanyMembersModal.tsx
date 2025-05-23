import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import EditCompanyMembersForm from "@/components/Forms/EditCompanyMembersForm";

type Props = {
  handlerCloseModal: () => void;
  companyId: string;
};

const EditCompanyMembersModal = ({ handlerCloseModal, companyId }: Props) => {
  const { t } = useTranslation();
  const formName = "edit-company-members-form";

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Modals.editCompanyMembers.title")}
        formName={formName}
      >
        <EditCompanyMembersForm
          handlerCloseModal={handlerCloseModal}
          formName={formName}
          companyId={companyId}
        />
      </ModalLayout>
    </Modal>
  );
};

export default EditCompanyMembersModal;
