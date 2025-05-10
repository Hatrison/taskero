import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface SidebarProps {
  isMobileOpen?: boolean;
}

export const SidebarWrapper = styled.aside<SidebarProps>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: ${({ isMobileOpen }) => (isMobileOpen ? "100%" : "83px")};
  background-color: ${({ theme }) => theme.sidebarBackground};
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 24px 16px 16px 16px;
  transition: width ${({ theme }) => theme.animation};
  overflow: hidden;
  z-index: 100;

  @media (min-width: 1280px) {
    &:hover {
      width: 280px;
    }
  }

  @media (max-width: 1279px) {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
  }
`;

export const UpperBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LogoBlock = styled.div`
  padding: 0 6px;
  display: flex;
  flex-shrink: 0;

  @media (min-width: 1280px) {
    ${SidebarWrapper} & h1 {
      transition: opacity ${({ theme }) => theme.animation};
      opacity: 0;
    }

    ${SidebarWrapper}:hover & h1 {
      opacity: 1;
    }
  }
`;

export const MobileControls = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  padding: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryText};

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 4px;
  color: ${({ theme }) => theme.primaryText};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animation};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }

  &.active {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border: none;
  border-radius: 4px;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryText};
  transition: background-color ${({ theme }) => theme.animation};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

export const Label = styled.span`
  white-space: nowrap;
  font-size: 16px;

  @media (min-width: 1280px) {
    transition: opacity ${({ theme }) => theme.animation};
    opacity: 0;

    ${SidebarWrapper}:hover & {
      opacity: 1;
    }
  }
`;
