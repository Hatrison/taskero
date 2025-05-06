import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
  max-width: 1440px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
  }
`;

export const Steps = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const Step = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

export const Number = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText};
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const StepInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StepTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
`;

export const StepDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.secondaryText};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-width: 600px;
`;
