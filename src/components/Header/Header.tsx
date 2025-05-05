import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "@/components/Logo";
import { useTranslation } from "react-i18next";
import {
  HeaderWrapper,
  Nav,
  Link,
  NavList,
  Burger,
  LinkButton,
  NavWrapper,
  Controls,
} from "./Header.styled";
import { FiMenu, FiX } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTheme } from "styled-components";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const theme = useTheme();
  const { t } = useTranslation();

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <HeaderWrapper>
      <Logo />

      <NavWrapper>
        <Nav>
          <NavList>
            <Link to="#features">{t("LandingPage.Header.features")}</Link>
            <Link to="#how-it-works">{t("LandingPage.Header.howItWorks")}</Link>
            <Link to="#reviews">{t("LandingPage.Header.reviews")}</Link>
          </NavList>
        </Nav>

        <Controls>
          {isDesktop && (
            <>
              <LanguageSwitcher />
              <ThemeToggle />

              <Link to="/login">{t("LandingPage.Header.login")}</Link>
              <LinkButton to="/register">
                {t("LandingPage.Header.getStarted")}
              </LinkButton>
            </>
          )}

          <Burger onClick={() => handleMenuToggle()}>
            {menuOpen ? (
              <FiX size={24} color={theme.primaryText} />
            ) : (
              <FiMenu size={24} color={theme.primaryText} />
            )}
          </Burger>

          {menuOpen && <MobileMenu onClose={() => handleMenuToggle()} />}
        </Controls>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
