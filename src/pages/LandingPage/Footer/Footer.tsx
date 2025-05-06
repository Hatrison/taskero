import { useTranslation } from "react-i18next";
import { FooterWrapper, Copyright } from "./Footer.styled";
import Logo from "@/components/Logo";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Logo />
      <Copyright>{t("LandingPage.Footer.copyright", { year })}</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
