import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import ChangePasswordForm from "@/components/Forms/ChangePasswordForm";

type Props = {
  handlerCloseModal: () => void;
};

const ChangePasswordModal = ({ handlerCloseModal }: Props) => {
  const { t } = useTranslation();
  const formName = "change-password-form";

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Forms.account.changePassword")}
        formName={formName}
      >
        <ChangePasswordForm
          handlerCloseModal={handlerCloseModal}
          formName={formName}
        />
      </ModalLayout>
    </Modal>
  );
};

export default ChangePasswordModal;
