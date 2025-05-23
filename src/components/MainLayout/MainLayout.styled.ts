import styled from "styled-components";
import SuspenseWrapper from "@/components/SuspenseWrapper";

export const MainWrap = styled.main`
  max-width: 100vw;
  background-color: ${({ theme }) => theme.background};
`;

export const Container = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  min-height: 100vh;
  position: relative;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 56px);
  flex-grow: 1;
  padding-left: 83px;
  overflow-y: auto;
  position: relative;
  margin-top: 56px;

  @media (max-width: 1279px) {
    padding-left: 0;
  }
`;

export const SpinnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Suspense = styled(SuspenseWrapper)`
  flex-grow: 1;
  padding-top: 30px;
`;
