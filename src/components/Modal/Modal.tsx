import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContainer } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

type Props = {
  children: React.ReactNode;
  handlerCloseModal: () => void;
};

export const Modal = ({ children, handlerCloseModal }: Props) => {
  const onEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Escape") handlerCloseModal();
    },
    [handlerCloseModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "auto";
    };
  }, [onEsc]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) handlerCloseModal();
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>{children}</ModalContainer>
    </Backdrop>,
    modalRoot as HTMLElement
  );
};

export default Modal;
