import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectCompanies,
  selectCurrentCompany,
} from "@/redux/companies/selectors";
import { setCurrentCompany } from "@/redux/companies/companiesSlice";
import { selectUserAvatar } from "@/redux/user/selectors";
import CustomSelect from "@/components/CustomSelect";
import LangToggle from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import UserAvatar from "@/components/UserAvatar";
import {
  HeaderWrapper,
  LeftGroup,
  RightGroup,
  BurgerButton,
  SelectWrapper,
} from "./Header.styled";
import { FiMenu } from "react-icons/fi";

type Props = {
  onSidebarToggle: () => void;
};

const Header = ({ onSidebarToggle }: Props) => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(selectCompanies);
  const currentCompany = useAppSelector(selectCurrentCompany);
  const avatarSrc = useAppSelector(selectUserAvatar);
  const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <LeftGroup>
        {isMobile && (
          <BurgerButton onClick={onSidebarToggle}>
            <FiMenu size={24} color={theme.primaryText} />
          </BurgerButton>
        )}
        <SelectWrapper>
          <CustomSelect
            options={companies}
            value={currentCompany}
            onChange={(c) => dispatch(setCurrentCompany(c))}
            getLabel={(c) => c.name}
            getKey={(c) => c._id}
            placeholder={t("header.selectCompany")}
          />
        </SelectWrapper>
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
