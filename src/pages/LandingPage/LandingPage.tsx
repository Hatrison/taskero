import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal";

const LandingPage = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlerCloseModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <button type="button" onClick={() => handlerCloseModal()}>
        Click here to open modal
      </button>
      {isModalOpen && (
        <Modal handlerCloseModal={handlerCloseModal}>
          <h1>{t("welcome")}</h1>
        </Modal>
      )}
    </>
  );
};

export default LandingPage;
