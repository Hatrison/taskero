import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchReviews } from "@/redux/reviews/operations";
import { selectReviews } from "@/redux/reviews/selectors";
import Section from "@/components/Section";
import {
  Card,
  UserRow,
  Avatar,
  UserName,
  Text,
  StyledSlider,
  UserInfo,
} from "./ReviewsSection.styled";

const ReviewsSection = () => {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(selectReviews);
  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const Stars = ({ rating }: { rating: number }) => {
    return (
      <div style={{ display: "flex", gap: "4px" }}>
        {Array.from({ length: 5 }, (_, i) =>
          i < rating ? (
            <FaStar key={i} size={16} color={theme.starColor} />
          ) : (
            <FaRegStar key={i} size={16} color={theme.starColorInactive} />
          )
        )}
      </div>
    );
  };

  return (
    <Section
      id="reviews"
      title={t("LandingPage.Reviews.title")}
      backgroundColor={theme.backgroundSecondary}
    >
      <StyledSlider {...settings}>
        {reviews.map((r) => (
          <Card key={r._id}>
            <UserRow>
              <Avatar src={r.user.avatar} alt={r.user.name} />
              <UserInfo>
                <UserName>{r.user.name}</UserName>
                <Stars rating={r.rating} />
              </UserInfo>
            </UserRow>
            <Text>{r.text}</Text>
          </Card>
        ))}
      </StyledSlider>
    </Section>
  );
};

export default ReviewsSection;
