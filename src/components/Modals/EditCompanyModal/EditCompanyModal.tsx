import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import EditCompanyForm from "@/components/Forms/EditCompanyForm";

type Props = {
  handlerCloseModal: () => void;
  deleteAction: () => void;
  companyId: string;
};

const EditCompanyModal = ({
  handlerCloseModal,
  deleteAction,
  companyId,
}: Props) => {
  const { t } = useTranslation();
  const formName = "edit-company-form";

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Modals.editCompany.title")}
        formName={formName}
        deleteAction={deleteAction}
      >
        <EditCompanyForm
          handlerCloseModal={handlerCloseModal}
          formName={formName}
          companyId={companyId}
        />
      </ModalLayout>
    </Modal>
  );
};

export default EditCompanyModal;
