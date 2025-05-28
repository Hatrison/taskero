import styled from "styled-components";

export const Wrapper = styled.div<{ isEmpty?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 290px;
  min-height: 100%;
  padding: ${({ isEmpty }) => (isEmpty ? "0" : "16px")};
  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border: 2px dashed ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  cursor: default;
`;

export const Placeholder = styled.div<{ loading?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 100%;
  padding: 16px;
  font-size: 16px;
  text-align: center;
  cursor: ${({ loading }) => (loading ? "default" : "pointer")};
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: transparent;
  color: ${({ theme }) => theme.secondaryText};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryText};
  word-break: break-word;
  overflow-wrap: break-word;
`;

export const TitleInput = styled.input`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryText};
  border: none;
  padding: 0px;

  &:focus {
    outline: none;
  }
`;

export const InlineControls = styled.div`
  display: flex;
  gap: 4px;
`;

export const ControlButton = styled.button<{ hoverColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryText};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ hoverColor, theme }) => hoverColor || theme.primary};
  }
`;

export const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
