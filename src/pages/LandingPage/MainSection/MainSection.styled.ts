import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 80px 24px;
  background-color: ${({ theme }) => theme.background};

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 60px;
    justify-content: space-between;
    padding: 80px 36px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
    align-items: flex-start;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 18px;

  @media screen and (min-width: 768px) {
    text-align: center;
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
    text-align: left;
    gap: 18px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.secondaryText};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ButtonPrimary = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText};
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  transition: background-color ${({ theme }) => theme.animation};

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  @media screen and (min-width: 768px) {
    width: fit-content;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
  display: block;
`;
