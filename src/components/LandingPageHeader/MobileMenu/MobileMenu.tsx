import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import {
  MobileMenuWrapper,
  MobileLink,
  MobileLinkButton,
  Controls,
} from "./MobileMenu.styled";

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <MobileMenuWrapper>
      <Controls>
        <ThemeToggle />
        <LanguageSwitcher />
      </Controls>

      <MobileLink to="#features" onClick={onClose}>
        {t("LandingPage.Header.features")}
      </MobileLink>
      <MobileLink to="#how-it-works" onClick={onClose}>
        {t("LandingPage.Header.howItWorks")}
      </MobileLink>
      <MobileLink to="#reviews" onClick={onClose}>
        {t("LandingPage.Header.reviews")}
      </MobileLink>
      <MobileLink to="/login" onClick={onClose}>
        {t("LandingPage.Header.login")}
      </MobileLink>
      <MobileLinkButton to="/register" onClick={onClose}>
        {t("LandingPage.Header.getStarted")}
      </MobileLinkButton>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
