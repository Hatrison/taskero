import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
import { TaskPriority } from "@/redux/tasks/tasks.types";

const priorityBackgroundMap: Record<TaskPriority, keyof DefaultTheme> = {
  low: "priorityLow",
  medium: "priorityMedium",
  high: "priorityHigh",
  critical: "priorityCritical",
};

const priorityTextMap: Record<TaskPriority, keyof DefaultTheme> = {
  low: "priorityTextLow",
  medium: "priorityTextMedium",
  high: "priorityTextHigh",
  critical: "priorityTextCritical",
};

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryText};
`;

export const PriorityTag = styled.span<{ $priority: TaskPriority }>`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ theme, $priority }) => theme[priorityTextMap[$priority]]};
  background-color: ${({ theme, $priority }) =>
    theme[priorityBackgroundMap[$priority]]};
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText};
`;
