import styled from "styled-components";
import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  width: 100%;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots {
    bottom: -30px;
    li button:before {
      font-size: 10px;
      color: ${({ theme }) => theme.secondaryText};
    }

    li.slick-active button:before {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  padding: 32px;
  width: 100%;
  display: flex !important;
  flex-direction: column;
  gap: 18px;
`;

export const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.primaryText};
`;
