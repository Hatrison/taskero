import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
`;

export const BoardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: raw;
  gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};

  @media screen and (min-width: 768px) {
    gap: 24px;
    padding: 24px;
  }
`;
