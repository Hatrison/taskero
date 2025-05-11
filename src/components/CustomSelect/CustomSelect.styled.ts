import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Trigger = styled.button`
  padding: 8px 8px 8px 16px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.primaryText};
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
`;

export const Label = styled.span`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px;
  list-style: none;
  padding: 4px 0;
  margin: 0;
  z-index: 10;
  width: 100%;
`;

export const Option = styled.li`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;
