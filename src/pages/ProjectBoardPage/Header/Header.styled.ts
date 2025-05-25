import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding: 2px 16px 12px 16px;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  & div {
    align-self: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 8px 16px;
    height: 56px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};

  max-width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 420px) {
    max-width: 250px;
  }

  @media (min-width: 768px) {
    top: 50%;
  }

  @media (min-width: 900px) {
    max-width: 300px;
  }

  @media (min-width: 1280px) {
    max-width: 50%;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  background: none;
  border: none;
  font-weight: 500;
  padding: 10px;
  color: ${({ theme }) => theme.primaryText};
  cursor: pointer;
  transition: color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

export const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.primaryText};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
