import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const UpperBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
`;

export const CreateButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animation};

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > * {
    min-height: 44px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primaryText};
  transition: border-color ${({ theme }) => theme.animation};

  &::placeholder {
    color: ${({ theme }) => theme.secondaryText};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
`;
