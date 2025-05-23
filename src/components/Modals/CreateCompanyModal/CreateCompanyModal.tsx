import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import CreateCompanyForm from "@/components/Forms/CreateCompanyForm";

type Props = {
  handlerCloseModal: () => void;
};

const CreateCompanyModal = ({ handlerCloseModal }: Props) => {
  const { t } = useTranslation();
  const formName = "create-company-form";

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Modals.createCompany.title")}
        formName={formName}
      >
        <CreateCompanyForm
          handlerCloseModal={handlerCloseModal}
          formName={formName}
        />
      </ModalLayout>
    </Modal>
  );
};

export default CreateCompanyModal;
