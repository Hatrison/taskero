import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { useAppDispatch } from "@/hooks";
import { UserBase } from "@/redux/user/user.types";
import { resolveUsersByEmail } from "@/redux/user/operations";
import { SubmitButtonModal } from "@/styles/form/Form.styled";
import EmailInputWithTags from "./EmailInputWithTags";
import {
  AvatarPlaceholder,
  ListContainer,
  MemberRow,
  Avatar,
  MemberInfo,
  Name,
  Email,
  RoleBadge,
  RemoveButton,
} from "./UserList.styled";

export interface UserListItem extends UserBase {
  role: "owner" | "member" | "editor" | "viewer" | "new";
}

interface Props {
  value: string[];
  users: UserListItem[];
  onChange: (value: string[]) => void;
  withActions?: boolean;
}

const UserList = ({ value, users, onChange, withActions = true }: Props) => {
  const dispatch = useAppDispatch();
  const [pendingEmails, setPendingEmails] = useState<string[]>([]);
  const [localUsers, setLocalUsers] = useState<UserListItem[]>([]);
  const { t } = useTranslation();
  const theme = useTheme();

  const roleColors: Record<
    "owner" | "member" | "editor" | "viewer" | "new",
    string
  > = {
    owner: theme.roleOwner,
    editor: theme.roleEditor,
    viewer: theme.roleViewer,
    member: theme.roleMember,
    new: theme.roleNew,
  };

  const handleRemove = (emailToRemove: string) => {
    onChange(value.filter((email) => email !== emailToRemove));
  };

  const handleAddMembers = async () => {
    if (pendingEmails.length === 0) {
      toast.info(t("Forms.common.nobodyToAdd") as string);
      return;
    }

    const uniqueToAdd = pendingEmails.filter((email) => !value.includes(email));

    if (uniqueToAdd.length === 0) {
      toast.info(t("Forms.common.allAlreadyAdded") as string);
      setPendingEmails([]);
      return;
    }

    try {
      const resolved: UserBase[] = await dispatch(
        resolveUsersByEmail(uniqueToAdd)
      ).unwrap();

      const enriched: UserListItem[] = resolved.map((user) => ({
        ...user,
        role: "new" as const,
      }));

      setLocalUsers((prev) => [...prev, ...enriched]);
      onChange([...value, ...enriched.map((u) => u.email)]);
      setPendingEmails([]);
    } catch (error) {
      toast.error(t("Forms.common.fetchUsersFailed") as string);
      onChange([...value, ...uniqueToAdd]);
      setPendingEmails([]);
    }
  };

  const displayedUsers: UserListItem[] = value.map((email) => {
    const matched =
      users.find((u) => u.email === email) ||
      localUsers.find((u) => u.email === email);

    return (
      matched || {
        _id: email,
        name: email.split("@")[0],
        email,
        role: "new",
      }
    );
  });

  const renderUserList = () => (
    <ListContainer>
      {displayedUsers.map((user) => {
        const roleColor = roleColors[user.role] || theme.roleMember;

        return (
          <MemberRow key={user._id}>
            {user.avatar ? (
              <Avatar src={user.avatar} alt={user.name} />
            ) : (
              <AvatarPlaceholder />
            )}

            <MemberInfo>
              <Name>
                {user.name}
                {user.role && (
                  <RoleBadge color={roleColor}>
                    {t(`Common.roles.${user.role}`)}
                  </RoleBadge>
                )}
              </Name>
              <Email>{user.email}</Email>
            </MemberInfo>

            {withActions && user.role !== "owner" && (
              <RemoveButton
                type="button"
                onClick={() => handleRemove(user.email)}
              >
                {t("Forms.common.remove")}
              </RemoveButton>
            )}
          </MemberRow>
        );
      })}
    </ListContainer>
  );

  const renderAddSection = () => (
    <>
      <label>{t("Forms.common.addMembers")}</label>
      <EmailInputWithTags
        pending={pendingEmails}
        onPendingChange={setPendingEmails}
        placeholder={t("Forms.common.addMembersPlaceholder")}
      />

      <SubmitButtonModal type="button" onClick={handleAddMembers}>
        {t("Forms.common.addMembers")}
      </SubmitButtonModal>
    </>
  );

  return (
    <>
      {renderUserList()}
      {withActions && renderAddSection()}
    </>
  );
};

export default UserList;
