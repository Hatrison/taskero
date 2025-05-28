import styled from "styled-components";
import { Form, Field } from "formik";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryText};
`;

export const Input = styled(Field)<{ $hasError?: boolean }>`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid
    ${({ $hasError, theme }) => ($hasError ? "#e74a3b" : theme.borderColor)};
  border-radius: 4px;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.cardBackground};
  outline: none;
  transition: border-color ${({ theme }) => theme.animation};

  &::placeholder {
    color: ${({ theme }) => theme.secondaryText};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const TogglePassword = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryText};
`;

export const CheckboxRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;

export const CustomCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.primaryText};
  cursor: pointer;
  user-select: none;

  input {
    display: none;
  }

  span {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.borderColor};
    border-radius: 4px;
    position: relative;
    transition: all ${({ theme }) => theme.animation};
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }

  input:checked + span::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const ForgotLink = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  transition: color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animation};

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

export const SubmitButtonModal = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animation};

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  .btn-text {
    display: inline-block;
    white-space: nowrap;
  }

  .btn-loader {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const CancelButtonModal = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.secondaryText};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animation};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;

export const DeleteButtonModal = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.danger};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: color ${({ theme }) => theme.animation},
    background-color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.dangerHover};
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;

export const ErrorText = styled.p`
  color: #e74a3b;
  font-size: 12px;
  margin-top: -4px;
`;

export const TermsLink = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  text-decoration: underline;
  transition: color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

export const Textarea = styled(Input).attrs({ as: "textarea" })`
  resize: none;
  height: 150px;
  overflow-y: auto;
`;
