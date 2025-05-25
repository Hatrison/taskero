import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import UserAvatar from "@/components/UserAvatar";
import {
  BackButton,
  ControlButton,
  Controls,
  HeaderWrapper,
  Title,
} from "./Header.styled";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";

type Props = {
  name: string;
  avatar: string;
  toggleMembersModal: () => void;
  toggleSettingsModal: () => void;
};

const Header = ({
  name,
  avatar,
  toggleMembersModal,
  toggleSettingsModal,
}: Props) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <HeaderWrapper>
        <BackButton to={"/"}>
          <FaChevronLeft size={16} /> {!isMobile && t("Project.backToProjects")}
        </BackButton>
        <Title>{name}</Title>
        <Controls>
          <LanguageSwitcher />
          <ThemeToggle />
          <ControlButton type="button" onClick={() => toggleMembersModal()}>
            <HiUserGroup size={20} />
          </ControlButton>
          <ControlButton type="button" onClick={() => toggleSettingsModal()}>
            <FiSettings size={20} />
          </ControlButton>
          <Link to="/account">
            <UserAvatar src={avatar} size={36} />
          </Link>
        </Controls>
      </HeaderWrapper>
    </>
  );
};

export default Header;
