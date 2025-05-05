import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const LogoText = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
`;
