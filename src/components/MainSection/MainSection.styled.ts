import styled from "styled-components";

interface ContainerProps {
  $background?: string;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 80px 24px;
  background-color: ${({ $background, theme }) =>
    $background || theme.background};

  @media screen and (min-width: 1280px) {
    padding: 80px 36px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
`;
