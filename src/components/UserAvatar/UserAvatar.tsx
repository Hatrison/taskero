import { Avatar, Img, Initials } from "./UserAvatar.styled";

type Props = {
  src?: string;
  alt?: string;
  size?: number;
};

const UserAvatar = ({ src, alt = "Avatar", size = 36 }: Props) => {
  return (
    <Avatar size={size}>
      {src ? <Img src={src} alt={alt} /> : <Initials>👤</Initials>}
    </Avatar>
  );
};

export default UserAvatar;
