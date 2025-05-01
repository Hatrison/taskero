import { LoaderSpinner } from "./Loader.styled";

type Props = {
  size?: string;
  color?: string;
};

const Loader = ({ size = "48px", color = "#000000" }: Props) => {
  return <LoaderSpinner size={size} color={color} />;
};

export default Loader;
