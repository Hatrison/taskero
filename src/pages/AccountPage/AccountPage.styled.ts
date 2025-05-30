import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  height: 100%;
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.backgroundSecondary};

  @media screen and (min-width: 768px) {
    padding: 24px 100px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
`;

export const FormWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
