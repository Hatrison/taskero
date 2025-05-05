import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 64px) / 3);
  }
`;

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.secondaryText};
`;
