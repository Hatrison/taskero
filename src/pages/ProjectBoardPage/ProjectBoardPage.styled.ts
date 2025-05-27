import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.background};
`;
