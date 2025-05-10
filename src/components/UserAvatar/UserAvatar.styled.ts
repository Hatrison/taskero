import styled from "styled-components";

export const Avatar = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.scrollbarColor};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Initials = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.primaryText};
`;
