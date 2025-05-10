import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: ${({ theme }) => theme.headerBackground};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Nav = styled.nav`
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryText};
  font-weight: 500;
  transition: color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LinkButton = styled(RouterLink)`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.buttonText};
    padding: 8px 20px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    transition: background-color ${({ theme }) => theme.animation};

    &:hover {
      background-color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export const Burger = styled.button`
  display: block;
  background: none;
  border: none;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
