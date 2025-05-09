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
          <TabLink to="/login">Login</TabLink>
          <TabLink to="/register">Register</TabLink>
        </Tabs>

        {children}

        <Divider>
          <DividerLine />
          <DividerText>or continue with</DividerText>
          <DividerLine />
        </Divider>
        <GoogleButton type="button">
          <FcGoogle size={20} />
          Continue with Google
        </GoogleButton>
      </Card>
    </Wrapper>
  );
};

export default AuthLayout;
