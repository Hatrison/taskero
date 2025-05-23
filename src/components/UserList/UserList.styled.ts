import styled from "styled-components";

export const MemberRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.cardBackground};
`;

export const AvatarPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #ccc;
  flex-shrink: 0;
`;

export const MemberInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Name = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.primaryText};
`;

export const Email = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RoleBadge = styled.span`
  font-size: 12px;
  background-color: ${({ theme }) => theme.tagBackground};
  color: ${({ theme }) => theme.primary};
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
`;

export const RemoveButton = styled.button`
  border: 1px solid ${({ theme }) => theme.danger};
  color: ${({ theme }) => theme.danger};
  background: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.dangerHover || "rgba(255, 0, 0, 0.05)"};
  }
`;
