import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import EditCompanyMembersForm from "@/components/Forms/EditCompanyMembersForm";

type Props = {
  handlerCloseModal: () => void;
  companyId: string;
  withActions?: boolean;
};

const EditCompanyMembersModal = ({
  handlerCloseModal,
  companyId,
  withActions = true,
}: Props) => {
  const { t } = useTranslation();
  const formName = "edit-company-members-form";

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Modals.editCompanyMembers.title")}
        formName={formName}
        withActions={withActions}
      >
        <EditCompanyMembersForm
          handlerCloseModal={handlerCloseModal}
          formName={formName}
          companyId={companyId}
          withActions={withActions}
        />
      </ModalLayout>
    </Modal>
  );
};

export default EditCompanyMembersModal;
