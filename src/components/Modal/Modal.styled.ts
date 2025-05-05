import styled from "styled-components";
import { ReactComponent as CloseIcon } from "@/images/svg/closeModal.svg";

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  min-width: 200px;
  min-height: 200px;
  padding: 35px;
  background-color: ${({ theme }) => theme.background};
  border: ${({ theme }) => theme.modalBorder};
  border-radius: 8px;

  box-shadow: ${({ theme }) => theme.shadow};
`;

export const CloseButton = styled.button`
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;

  &:hover svg {
    stroke: ${({ theme }) => theme.modalCloseIconColorHover};
    scale: 1.1;
  }
`;

export const MyCloseIcon = styled(CloseIcon)`
  stroke: ${({ theme }) => theme.modalCloseIconColor};
  width: 24px;
  height: 24px;
  transition: stroke ${({ theme }) => theme.animation},
    scale ${({ theme }) => theme.animation};
`;
