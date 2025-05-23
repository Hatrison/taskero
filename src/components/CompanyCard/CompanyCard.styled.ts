import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};
`;

export const UpperBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 12px;
  background-color: #ddd;
`;

export const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryText};
`;

export const RoleBadge = styled.span<{ color: string }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.roleTextColor};
  background-color: ${({ color }) => color};
  border-radius: 4px;
  padding: 2px 8px;
  align-self: start;
`;

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.secondaryText};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
