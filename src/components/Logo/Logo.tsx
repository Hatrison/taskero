import { LogoText, LogoWrapper, Logo as LogoImg } from "./Logo.styled";
import logo from "@/images/png/logo.png";

const Logo = () => {
  return (
    <LogoWrapper to="/">
      <LogoImg src={logo} alt="Taskero Logo" />
      <LogoText>Taskero</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
