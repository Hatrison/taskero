import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 56px;
  z-index: 99;
  padding: 0 16px 0px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  @media screen and (min-width: 1279px) {
    width: calc(100% - 83px);
  }
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SelectWrapper = styled.div`
  max-width: 300px;
  min-width: 140px;

  @media screen and (max-width: 480px) {
    max-width: 250px;
  }

  @media screen and (max-width: 430px) {
    max-width: 200px;
  }
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
