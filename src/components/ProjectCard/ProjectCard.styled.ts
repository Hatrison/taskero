import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapperLink = styled(Link)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 100%;
  min-height: 200px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: background-color ${({ theme }) => theme.animation};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProjectTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

export const ProjectCompany = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText};
`;

export const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AddittionalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RoleBadge = styled.span<{ color: string }>`
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.roleTextColor};
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  text-transform: capitalize;
`;

export const DateText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.secondaryText};
`;
