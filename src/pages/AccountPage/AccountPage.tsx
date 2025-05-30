import { useTranslation } from "react-i18next";
import { Container, FormWrapper, Title } from "./AccountPage.styled";
import AccountForm from "@/components/Forms/AccountForm";

const AccountPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("Account.title")}</Title>
      <FormWrapper>
        <AccountForm />
      </FormWrapper>
    </Container>
  );
};

export default AccountPage;
