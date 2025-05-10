import { useAppSelector } from "@/hooks";
import { selectUserAvatar } from "@/redux/user/selectors";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import CompanySelect from "./CompanySelect";
import LangToggle from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import UserAvatar from "@/components/UserAvatar";
import {
  HeaderWrapper,
  LeftGroup,
  RightGroup,
  BurgerButton,
} from "./Header.styled";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

type Props = {
  onSidebarToggle: () => void;
};

const Header = ({ onSidebarToggle }: Props) => {
  const avatarSrc = useAppSelector(selectUserAvatar);
  const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <LeftGroup>
        {isMobile && (
          <BurgerButton onClick={onSidebarToggle}>
            <FiMenu size={24} color={theme.primaryText} />
          </BurgerButton>
        )}
        <CompanySelect />
      </LeftGroup>

      <RightGroup>
        {!isMobile && (
          <>
            <LangToggle />
            <ThemeToggle />
          </>
        )}
        <Link to="/account">
          <UserAvatar src={avatarSrc} size={40} />
        </Link>
      </RightGroup>
    </HeaderWrapper>
  );
};

export default Header;
