import { useTranslation } from "react-i18next";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Wrapper,
  Card,
  TopRow,
  Tabs,
  TabLink,
  Divider,
  DividerLine,
  DividerText,
} from "./AuthLayout.styled";
import GoogleLoginButton from "./GoogleLoginButton";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Card>
        <TopRow>
          <Logo />
          <div style={{ display: "flex", gap: "8px" }}>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </TopRow>

        <Tabs>
          <TabLink to="/login">{t("Auth.login")}</TabLink>
          <TabLink to="/register">{t("Auth.register")}</TabLink>
        </Tabs>

        {children}

        <Divider>
          <DividerLine />
          <DividerText>{t("Auth.orWith")}</DividerText>
          <DividerLine />
        </Divider>

        <GoogleLoginButton />
      </Card>
    </Wrapper>
  );
};

export default AuthLayout;
