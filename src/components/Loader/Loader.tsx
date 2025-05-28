import { useTheme } from "styled-components";
import { LoaderSpinner } from "./Loader.styled";

type Props = {
  size?: string;
  color?: string;
};

const Loader = ({ size = "48px", color }: Props) => {
  const theme = useTheme();

  return <LoaderSpinner size={size} color={color || theme.primary} />;
};

export default Loader;
