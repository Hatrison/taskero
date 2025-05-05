import { FiSun, FiMoon } from "react-icons/fi";
import { useAppSelector } from "@/hooks";
import { useTheme } from "styled-components";
import { Toggle } from "./ThemeToggle.styled";
import { useToggleTheme } from "@/hooks";

const ThemeToggle = () => {
  const currentTheme = useAppSelector((state) => state.theme.current);
  const toggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <Toggle onClick={toggleTheme}>
      {currentTheme === "light" ? (
        <FiSun size={20} color={theme.primaryText} />
      ) : (
        <FiMoon size={20} color={theme.primaryText} />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
