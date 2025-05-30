import styled from "styled-components";
import { ReactComponent as CloseIcon } from "@/images/svg/closeModal.svg";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const ChildrenWrapper = styled.div`
  padding: 24px;
  overflow: auto;
`;

export const ModalActions = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 24px;
  border-top: 1px solid ${({ theme }) => theme.borderColor};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MainControls = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    width: 100%;
    & button {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: auto;
  }
`;
