import { useTranslation } from "react-i18next";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import { FcGoogle } from "react-icons/fc";
import {
  Wrapper,
  Card,
  TopRow,
  Tabs,
  TabLink,
  Divider,
  DividerLine,
  DividerText,
  GoogleButton,
} from "./AuthLayout.styled";

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

        <GoogleButton type="button">
          <FcGoogle size={20} />
          {t("Auth.continueWithGoogle")}
        </GoogleButton>
      </Card>
    </Wrapper>
  );
};

export default AuthLayout;
