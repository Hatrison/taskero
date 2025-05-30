import styled from "styled-components";
import { Input } from "@/styles/form/Form.styled";

export const UpperBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  background: ${({ theme }) => theme.cardBackground};
`;

export const UploadButton = styled.button`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  transform: translate(40%, 40%);
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.buttonText};
  background-color: ${({ theme }) => theme.buttonBackground};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animation};

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const ChangePasswordButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.buttonBackground};
  border-radius: 4px;
  background: transparent;
  color: ${({ theme }) => theme.buttonBackground};
  cursor: pointer;
  transition: color ${({ theme }) => theme.animation},
    background-color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.buttonText};
    background-color: ${({ theme }) => theme.buttonBackground};
  }
`;

export const DisabledInput = styled(Input)`
  color: ${({ theme }) => theme.secondaryText};
  background: ${({ theme }) => theme.backgroundSecondary};
`;
