import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow-x: auto;
`;

export const EditOrderButton = styled.button<{ topOffset: number }>`
  position: fixed;
  top: ${({ topOffset }) => `${topOffset}px`};
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.primaryText};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${({ theme }) => theme.animation},
    border-color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }

  &[data-active="true"] {
    color: ${({ theme }) => theme.invertedText};
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const ColumnsRow = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  gap: 24px;
`;
