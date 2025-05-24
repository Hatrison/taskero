import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.cardBackground};
  min-height: 44px;
  max-height: 200px;
  overflow: auto;
  cursor: text;
  transition: border ${({ theme }) => theme.animation};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.tagBackground};
  color: ${({ theme }) => theme.primaryText};
  font-size: 14px;
`;

export const RemoveBtn = styled.button`
  margin-left: 6px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.danger};
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 150px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 6px;
  color: ${({ theme }) => theme.primaryText};
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.secondaryText};
  }
`;
