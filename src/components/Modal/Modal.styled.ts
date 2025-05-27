import styled from "styled-components";

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
  padding: 24px;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 800px;
  min-width: 200px;
  max-height: calc(100vh - 48px);
  background-color: ${({ theme }) => theme.background};
  border: ${({ theme }) => theme.modalBorder};
  border-radius: 8px;

  box-shadow: ${({ theme }) => theme.shadow};
`;
