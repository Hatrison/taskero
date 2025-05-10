import { Avatar, Img, Initials } from "./UserAvatar.styled";

type Props = {
  src?: string;
  size?: number;
};

const UserAvatar = ({ src, size = 36 }: Props) => {
  return (
    <Avatar size={size}>
      {src ? <Img src={src} alt="Avatar" /> : <Initials>👤</Initials>}
    </Avatar>
  );
};

export default UserAvatar;
