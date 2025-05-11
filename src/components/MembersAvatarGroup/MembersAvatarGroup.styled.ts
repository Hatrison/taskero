import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 28px;
  width: fit-content;
`;

export const MemberItem = styled.div<{ index: number }>`
  position: absolute;
  left: ${({ index }) => index * 20}px;
  z-index: ${({ index }) => 10 - index};
`;

export const ExtraAvatar = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.membersAvatarBackground};
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryText};
  font-weight: 500;
`;
