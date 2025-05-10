import { useTranslation } from "react-i18next";
import { logoutUser } from "@/redux/auth/operations";
import { useAppDispatch } from "@/hooks";
import Logo from "@/components/Logo";
import { useMediaQuery } from "react-responsive";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import {
  SidebarWrapper,
  UpperBlock,
  LogoBlock,
  NavList,
  NavItem,
  LogoutButton,
  IconWrapper,
  Label,
  CloseButton,
  MobileControls,
} from "./Sidebar.styled";
import { FiX, FiBriefcase, FiUser, FiLogOut, FiMenu } from "react-icons/fi";

type Props = {
  onSidebarToggle: () => void;
  isMobileOpen: boolean;
};

const Sidebar = ({ onSidebarToggle, isMobileOpen }: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <SidebarWrapper isMobileOpen={isMobileOpen}>
      <UpperBlock>
        <LogoBlock>
          <Logo />
          {isMobile && (
            <MobileControls>
              <LanguageSwitcher />
              <ThemeToggle />
              <CloseButton onClick={onSidebarToggle}>
                <FiX size={20} />
              </CloseButton>
            </MobileControls>
          )}
        </LogoBlock>

        <NavList>
          <NavItem to="/" onClick={onSidebarToggle}>
            <IconWrapper>
              <FiMenu size={20} />
            </IconWrapper>
            <Label>{t("Sidebar.dashboard")}</Label>
          </NavItem>

          <NavItem to="/companies" onClick={onSidebarToggle}>
            <IconWrapper>
              <FiBriefcase size={20} />
            </IconWrapper>
            <Label>{t("Sidebar.myCompanies")}</Label>
          </NavItem>

          <NavItem to="/account" onClick={onSidebarToggle}>
            <IconWrapper>
              <FiUser size={20} />
            </IconWrapper>
            <Label>{t("Sidebar.account")}</Label>
          </NavItem>
        </NavList>
      </UpperBlock>

      <LogoutButton onClick={() => handleLogout()}>
        <IconWrapper>
          <FiLogOut size={20} />
        </IconWrapper>
        <Label>{t("Sidebar.logout")}</Label>
      </LogoutButton>
    </SidebarWrapper>
  );
};

export default Sidebar;
