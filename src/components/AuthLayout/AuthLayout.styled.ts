import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  padding: 32px;
  width: 100%;
  max-width: 440px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const TabLink = styled(NavLink)`
  font-weight: 600;
  font-size: 16px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.secondaryText};
  text-decoration: none;
  position: relative;
  transition: color ${({ theme }) => theme.animation};

  &.active {
    color: ${({ theme }) => theme.primary};

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.borderColor};
`;

export const DividerText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText};
`;
