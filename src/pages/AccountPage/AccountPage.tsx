import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectReviews } from "@/redux/reviews/selectors";
import { deleteReview, fetchReviews } from "@/redux/reviews/operations";
import { Review } from "@/redux/reviews/reviews.types";
import { selectUser } from "@/redux/user/selectors";
import AccountForm from "@/components/Forms/AccountForm";
import FeedbackModal from "@/components/Modals/FeedbackModal";
import {
  Container,
  FeedbackButton,
  FormWrapper,
  Title,
} from "./AccountPage.styled";

const AccountPage = () => {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(selectReviews);
  const user = useAppSelector(selectUser);
  const [review, setReview] = useState<Review | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  useEffect(() => {
    if (reviews.length > 0) {
      const myReview = reviews.find((r) => r.user._id === user._id);
      setReview(myReview || null);
    }
  }, [reviews, user]);

  const toggleFeedback = () => {
    setShowFeedback((prev) => !prev);
  };

  const handleDeleteReview = async () => {
    if (!review) return;

    try {
      await dispatch(deleteReview(review._id)).unwrap();
      toast.success(t("Forms.deleteReview.success") as string);
      toggleFeedback();
    } catch (error) {
      toast.error(
        `${t("Forms.deleteReview.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  return (
    <>
      <Container>
        <Title>{t("Account.title")}</Title>
        <FormWrapper>
          <AccountForm />
        </FormWrapper>
        <FeedbackButton type="button" onClick={toggleFeedback}>
          {t("Account.leaveFeedback")}
        </FeedbackButton>
      </Container>

      {showFeedback && (
        <FeedbackModal
          handlerCloseModal={toggleFeedback}
          deleteAction={handleDeleteReview}
          review={review}
        />
      )}
    </>
  );
};

export default AccountPage;
