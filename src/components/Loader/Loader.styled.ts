import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderSpinner = styled.div<{
  size: string;
  color: string;
}>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 4px solid ${({ color }) => color}33;
  border-top: 4px solid ${({ color }) => color};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
