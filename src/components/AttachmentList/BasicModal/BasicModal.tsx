import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { Backdrop, ModalContainer } from "./BasicModal.styled";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const modalRoot = document.getElementById("modal-root")!;

const BasicModal = ({ children, onClose }: Props) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return ReactDOM.createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>{children}</ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default BasicModal;
