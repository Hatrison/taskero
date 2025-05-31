import styled from "styled-components";

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: transparent;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryText};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animation};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;
