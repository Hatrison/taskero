import {
  AvatarPlaceholder,
  MemberRow,
  MemberInfo,
  Name,
  Email,
  RoleBadge,
  RemoveButton,
} from "./UserList.styled";
import { useTranslation } from "react-i18next";

export interface UserListItem {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role?: string;
}

interface Props {
  users: UserListItem[];
  onRemove?: (email: string) => void;
  canRemove?: (role: string) => boolean;
  renderRole?: (role: string) => React.ReactNode;
  renderActions?: (user: UserListItem) => React.ReactNode;
}

const UserList = ({
  users,
  onRemove,
  canRemove = () => true,
  renderRole,
  renderActions,
}: Props) => {
  const { t } = useTranslation();

  return (
    <>
      {users.map((user) => (
        <MemberRow key={user.id}>
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={user.name}
              width={40}
              height={40}
              style={{ borderRadius: 8 }}
            />
          ) : (
            <AvatarPlaceholder />
          )}
          <MemberInfo>
            <Name>
              {user.name}
              {user.role && (
                <>
                  {" "}
                  <RoleBadge>
                    {renderRole
                      ? renderRole(user.role)
                      : t(`Common.roles.${user.role}`)}
                  </RoleBadge>
                </>
              )}
            </Name>
            <Email>{user.email}</Email>
          </MemberInfo>

          {renderActions?.(user)}

          {!renderActions && onRemove && user.role && canRemove(user.role) && (
            <RemoveButton type="button" onClick={() => onRemove(user.email)}>
              {t("Forms.common.remove")}
            </RemoveButton>
          )}
        </MemberRow>
      ))}
    </>
  );
};

export default UserList;
