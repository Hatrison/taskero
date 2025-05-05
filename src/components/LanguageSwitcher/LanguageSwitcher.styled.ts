import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primaryText};
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  min-width: 44px;
  text-align: center;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 2px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 10;
  overflow: hidden;
`;

export const Option = styled.button`
  width: 100%;
  padding: 8px 12px;
  background: none;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryText};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;
