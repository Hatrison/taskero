import { useEffect, useState } from "react";
import { Formik, FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  fetchCommentsByTask,
  createComment,
  updateComment,
  deleteComment,
} from "@/redux/comments/operations";
import { selectCommentsByTask } from "@/redux/comments/selectors";
import { Comment } from "@/redux/comments/comments.types";
import { selectUserEmail } from "@/redux/user/selectors";
import Loader from "@/components/Loader";
import UserAvatar from "@/components/UserAvatar";
import { CommentsSchema } from "./CommentsSchema";
import { Input, ErrorText as FormError } from "@/styles/form/Form.styled";
import {
  LoadContainer,
  Body,
  CommentItem,
  CommentList,
  Header,
  Section,
  Text,
  Title,
  StyledForm,
  InputContainer,
  SubmitButton,
  FormWrapper,
  InfoBlock,
  UserName,
  TimeStamp,
  ControlBlock,
  ControlButton,
} from "./CommentsSection.styled";

type Props = {
  taskId: string;
  withActions?: boolean;
};

interface FormValues {
  text: string;
}

const CommentsSection = ({ taskId, withActions = false }: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) =>
    selectCommentsByTask(taskId)(state)
  );
  const currentUserEmail = useAppSelector(selectUserEmail);
  const [isInitializing, setIsInitializing] = useState(true);
  const [editId, setEditId] = useState<string | null>(null);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchCommentsByTask(taskId))
      .catch((error) => {
        toast.error(
          `${t("Forms.comments.fetchFailed")}: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      })
      .finally(() => {
        setIsInitializing(false);
      });
  }, [dispatch, t, taskId]);

  const toggleEdit = (id: string) => {
    setEditId((prev) => (prev === id ? null : id));
  };

  const handleCreate = (
    values: FormValues,
    { resetForm, setSubmitting }: FormikHelpers<FormValues>
  ) => {
    dispatch(createComment({ task: taskId, text: values.text }))
      .then(() => {
        resetForm();
      })
      .finally(() => setSubmitting(false));
  };

  const handleUpdate = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    if (!editId) return;
    dispatch(updateComment({ id: editId, text: values.text }))
      .then(() => {
        setEditId(null);
      })
      .finally(() => setSubmitting(false));
  };

  if (isInitializing) {
    return (
      <Section>
        <Title>{t("Forms.comments.title")}</Title>
        <LoadContainer>
          <Loader size="40px" color="#3e85f3" />
        </LoadContainer>
      </Section>
    );
  }

  return (
    <Section>
      <Title>{t("Forms.comments.title")}</Title>

      <CommentList>
        {comments.map((c: Comment) => {
          const isOwn = c.user.email === currentUserEmail;

          return (
            <CommentItem key={c._id}>
              <UserAvatar src={c.user.avatar || ""} alt={c.user.name} />
              <Body>
                <Header>
                  <InfoBlock>
                    <UserName>{c.user.name}</UserName>{" "}
                    <TimeStamp>
                      {new Date(c.createdAt).toLocaleString()}
                    </TimeStamp>
                  </InfoBlock>
                  {withActions && isOwn && (
                    <ControlBlock>
                      <ControlButton onClick={() => toggleEdit(c._id)}>
                        <FiEdit2 size={16} />
                      </ControlButton>
                      <ControlButton
                        className="delete"
                        onClick={() => dispatch(deleteComment(c._id))}
                      >
                        <FiTrash2 size={16} />
                      </ControlButton>
                    </ControlBlock>
                  )}
                </Header>

                {editId === c._id ? (
                  <Formik
                    initialValues={{ text: c.text }}
                    validationSchema={CommentsSchema}
                    onSubmit={handleUpdate}
                  >
                    {({ errors, isSubmitting }) => (
                      <FormWrapper>
                        <StyledForm>
                          <InputContainer>
                            <Input
                              name="text"
                              placeholder={t("Forms.comments.editPlaceholder")}
                              $hasError={Boolean(errors.text)}
                              autoFocus
                            />
                          </InputContainer>
                          <SubmitButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <Loader size="16px" color={theme.buttonText} />
                            ) : (
                              t("Forms.comments.save")
                            )}
                          </SubmitButton>
                        </StyledForm>
                        <FormError>{errors.text}</FormError>
                      </FormWrapper>
                    )}
                  </Formik>
                ) : (
                  <Text>{c.text}</Text>
                )}
              </Body>
            </CommentItem>
          );
        })}
      </CommentList>

      {withActions && (
        <Formik
          initialValues={{ text: "" }}
          validationSchema={CommentsSchema}
          onSubmit={handleCreate}
        >
          {({ errors, isSubmitting }) => (
            <FormWrapper>
              <StyledForm>
                <InputContainer>
                  <Input
                    name="text"
                    placeholder={t("Forms.comments.addPlaceholder")}
                    $hasError={Boolean(errors.text)}
                  />
                </InputContainer>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader size="16px" color={theme.buttonText} />
                  ) : (
                    t("Forms.comments.post")
                  )}
                </SubmitButton>
              </StyledForm>
              <FormError>{errors.text}</FormError>
            </FormWrapper>
          )}
        </Formik>
      )}
    </Section>
  );
};

export default CommentsSection;
