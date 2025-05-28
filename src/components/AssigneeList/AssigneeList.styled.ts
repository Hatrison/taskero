import styled from "styled-components";

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.cardBackground};
  outline: none;
  transition: border-color ${({ theme }) => theme.animation};

  &::placeholder {
    color: ${({ theme }) => theme.secondaryText};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;
