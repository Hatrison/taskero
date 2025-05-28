import styled from "styled-components";
import {
  StyledForm as Form,
  InputContainer as FormInputContainer,
  SubmitButton as FormSubmitButton,
} from "@/styles/form/Form.styled";

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`;

export const Title = styled.h3`
  font-size: 18px;
`;

export const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CommentItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const Body = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  button {
  }
`;

export const InfoBlock = styled.div``;

export const UserName = styled.span`
  font-weight: 600;
`;

export const TimeStamp = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText};
`;

export const ControlBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  margin-left: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryText};
  transition: color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.delete:hover {
    color: ${({ theme }) => theme.danger};
  }
`;

export const Text = styled.p`
  word-break: break-word;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledForm = styled(Form)`
  flex-direction: row;
  width: 100%;
`;

export const InputContainer = styled(FormInputContainer)`
  flex: 1;
`;

export const SubmitButton = styled(FormSubmitButton)`
  min-width: 70px;
`;
