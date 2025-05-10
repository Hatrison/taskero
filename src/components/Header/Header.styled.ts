import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BurgerButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
