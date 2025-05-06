import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 24px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-top: 1px solid ${({ theme }) => theme.borderColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText};
  text-align: center;
`;
