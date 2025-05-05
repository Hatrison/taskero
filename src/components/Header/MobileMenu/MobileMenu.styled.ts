import { Link } from "react-router-dom";
import styled from "styled-components";

export const MobileMenuWrapper = styled.div`
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.background};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: calc(100vh - 72px);

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MobileLink = styled(Link)`
  font-size: 24px;
  color: ${({ theme }) => theme.primaryText};
  font-weight: 400;
  transition: color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const MobileLinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${({ theme }) => theme.buttonText};
  font-weight: 400;
  background-color: ${({ theme }) => theme.primary};
  padding: 8px 20px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color ${({ theme }) => theme.animation};

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  @media screen and (min-width: 1280px) {
    padding: 8px 16px;
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 16px;
`;
