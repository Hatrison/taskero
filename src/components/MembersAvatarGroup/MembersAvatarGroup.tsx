import { ProjectMember } from "@/redux/projects/projects.types";
import UserAvatar from "@/components/UserAvatar";
import { ExtraAvatar, MemberItem, Wrapper } from "./MembersAvatarGroup.styled";

type Props = {
  members: ProjectMember[];
  maxVisible?: number;
  size?: number;
};

const MembersAvatarGroup = ({ members, maxVisible = 4, size = 28 }: Props) => {
  const visibleMembers = members.slice(0, maxVisible);
  const remaining = members.length - maxVisible;

  return (
    <Wrapper>
      {visibleMembers.map(({ user }, index) => (
        <MemberItem key={user._id} index={index}>
          <UserAvatar
            src={
              user.avatar?.startsWith("http")
                ? user.avatar
                : `https:${user.avatar}`
            }
            size={size}
          />
        </MemberItem>
      ))}
      {remaining > 0 && (
        <MemberItem index={maxVisible}>
          <ExtraAvatar size={size}>+{remaining}</ExtraAvatar>
        </MemberItem>
      )}
    </Wrapper>
  );
};

export default MembersAvatarGroup;
