import styled from "styled-components";

export const ListContainer = styled.div`
  max-height: 240px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
`;

export const MemberRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px 16px;
  font-size: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.cardBackground};

  &:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  flex-shrink: 0;
  object-fit: cover;
`;

export const AvatarPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: #cccccc;
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

export const RoleBadge = styled.span<{ color: string }>`
  font-size: 12px;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.roleTextColor};
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  flex-shrink: 0;
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 150px;
`;

export const RemoveButton = styled.button`
  border: 1px solid ${({ theme }) => theme.danger};
  color: ${({ theme }) => theme.danger};
  background: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: color ${({ theme }) => theme.animation},
    background-color ${({ theme }) => theme.animation},
    border-color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.invertedText || "rgba(255, 0, 0, 0.8)"};
    background-color: ${({ theme }) =>
      theme.dangerHover || "rgba(255, 0, 0, 0.05)"};
    border-color: ${({ theme }) => theme.dangerHover || "rgba(255, 0, 0, 0.2)"};
  }
`;
