import { Formik } from "formik";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { useAppDispatch } from "@/hooks";
import { createReview, updateReview } from "@/redux/reviews/operations";
import { Review } from "@/redux/reviews/reviews.types";
import { FormikSubmitObserver } from "@/components/Modal";
import { FeedbackSchema } from "./FeedbackSchema";
import { FaStar, FaRegStar } from "react-icons/fa";
import {
  Wrapper,
  StyledForm,
  InputContainer,
  Label,
  Textarea,
  ErrorText,
} from "@/styles/form/Form.styled";

const Stars = ({
  rating,
  setFieldValue,
}: {
  rating: number;
  setFieldValue: (field: string, value: any) => void;
}) => {
  const theme = useTheme();
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          onClick={() => setFieldValue("rating", i + 1)}
          style={{ cursor: "pointer" }}
        >
          {i < rating ? (
            <FaStar size={16} color={theme.starColor} />
          ) : (
            <FaRegStar size={16} color={theme.starColorInactive} />
          )}
        </span>
      ))}
    </div>
  );
};

type Props = {
  handlerCloseModal: () => void;
  formName: string;
  review?: Review | null;
};

const FeedbackForm = ({ handlerCloseModal, formName, review }: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const initialValues = {
    rating: review?.rating ?? 0,
    text: review?.text ?? "",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      if (review) {
        await dispatch(
          updateReview({
            id: review._id,
            rating: values.rating,
            text: values.text,
          })
        ).unwrap();
        toast.success(t("Forms.updateReview.success") as string);
      } else {
        await dispatch(
          createReview({ rating: values.rating, text: values.text })
        ).unwrap();
        toast.success(t("Forms.createReview.success") as string);
      }
      handlerCloseModal();
    } catch (err: any) {
      const key = review
        ? "Forms.updateReview.failed"
        : "Forms.createReview.failed";
      toast.error(`${t(key)}: ${err.message || err}`);
    }
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <>
            <FormikSubmitObserver />

            <StyledForm id={formName}>
              <InputContainer>
                <Label htmlFor="rating">{t("Forms.feedback.rating")}</Label>
                <Stars rating={values.rating} setFieldValue={setFieldValue} />
                {errors.rating && touched.rating && (
                  <ErrorText>{errors.rating}</ErrorText>
                )}
              </InputContainer>

              <InputContainer>
                <Label htmlFor="text">{t("Forms.feedback.text")}</Label>
                <Textarea
                  id="text"
                  name="text"
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("Forms.feedback.placeholder") as string}
                  $hasError={!!(errors.text && touched.text)}
                />
                {errors.text && touched.text && (
                  <ErrorText>{errors.text}</ErrorText>
                )}
              </InputContainer>
            </StyledForm>
          </>
        )}
      </Formik>
    </Wrapper>
  );
};

export default FeedbackForm;
