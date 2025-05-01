import { ThemeProvider } from "styled-components";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectUser } from "@/redux/user/selectors";
import { theme as themeObject } from "./Theme.styled";

type Props = {
  children: React.ReactNode;
};

const Theme = ({ children }: Props) => {
  const { theme } = useAppSelector(selectUser);
  const { light, dark } = themeObject;

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
