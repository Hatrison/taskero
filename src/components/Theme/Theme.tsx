import { ThemeProvider } from "styled-components";
import { useAppSelector } from "@/hooks";
import { selectTheme } from "@/redux/theme/selectors";
import { theme as themeObject } from "./Theme.styled";

type Props = {
  children: React.ReactNode;
};

const Theme = ({ children }: Props) => {
  const theme = useAppSelector(selectTheme);
  const { light, dark } = themeObject;

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
