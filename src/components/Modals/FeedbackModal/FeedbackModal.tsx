import { useTranslation } from "react-i18next";
import { Review } from "@/redux/reviews/reviews.types";
import Modal from "@/components/Modal/Modal";
import ModalLayout from "@/components/Modal/ModalLayout";
import FeedbackForm from "@/components/Forms/FeedbackForm";

type Props = {
  handlerCloseModal: () => void;
  review?: Review | null;
  deleteAction?: () => void;
};

const FeedbackModal = ({ handlerCloseModal, review, deleteAction }: Props) => {
  const { t } = useTranslation();
  const formName = "feedback-form";

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalLayout
        handlerCloseModal={handlerCloseModal}
        title={t("Modals.feedback.title")}
        formName={formName}
        deleteAction={review && deleteAction}
      >
        <FeedbackForm
          review={review}
          handlerCloseModal={handlerCloseModal}
          formName={formName}
        />
      </ModalLayout>
    </Modal>
  );
};

export default FeedbackModal;
