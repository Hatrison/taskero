import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { resolveUsersByEmail } from "@/redux/user/operations";
import { selectUser } from "@/redux/user/selectors";
import { UserBase } from "@/redux/user/user.types";
import { SubmitButtonModal } from "@/styles/form/Form.styled";
import CustomSelect from "@/components/CustomSelect";
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
  SelectContainer,
} from "./UserList.styled";

type Role = "owner" | "member" | "editor" | "viewer" | "new";

export interface UserListItem extends UserBase {
  role?: Role;
  displayRole?: Role;
}

type UserWithRole = { email: string; role: Role };

type Member = string | UserWithRole;

interface Props {
  value?: Member[];
  users: UserListItem[];
  onChange: (value: UserBase[] | Member[]) => void;
  withActions?: boolean;
  editableRoles?: boolean;
  availableRoles?: UserListItem["role"][];
  viewMode?: boolean;
}

const UserList = ({
  value,
  users,
  onChange,
  withActions = true,
  editableRoles = false,
  availableRoles = ["member", "editor", "viewer"],
  viewMode = false,
}: Props) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUser);
  const [pendingEmails, setPendingEmails] = useState<string[]>([]);
  const [localUsers, setLocalUsers] = useState<UserListItem[]>([]);
  const { t } = useTranslation();
  const theme = useTheme();

  const roleColors: Record<Role, string> = {
    owner: theme.roleOwner,
    editor: theme.roleEditor,
    viewer: theme.roleViewer,
    member: theme.roleMember,
    new: theme.roleNew,
  };

  const handleRemoveInViewMode = (emailToRemove: string) => {
    const updated = users.filter(
      (user) => user.email.toLowerCase() !== emailToRemove.toLowerCase()
    );
    onChange(updated);
  };

  const renderUserListInViewMode = () => {
    return users.length ? (
      <ListContainer>
        {users.map((user) => {
          return (
            <MemberRow key={user._id}>
              {user.avatar ? (
                <Avatar src={user.avatar} alt={user.name} />
              ) : (
                <AvatarPlaceholder />
              )}

              <MemberInfo>
                <Name>{user.name}</Name>
                <Email>{user.email}</Email>
              </MemberInfo>

              <RemoveButton
                type="button"
                onClick={() => handleRemoveInViewMode(user.email)}
              >
                {t("Forms.common.remove")}
              </RemoveButton>
            </MemberRow>
          );
        })}
      </ListContainer>
    ) : null;
  };

  if (!value || (!Array.isArray(value) && viewMode)) {
    return renderUserListInViewMode();
  }

  const isExtended = typeof value?.[0] === "object" && value[0] !== null;

  const getEmail = (item: Member) =>
    typeof item === "string" ? item : item.email;

  const getRole = (item: Member): Role => {
    if (typeof item === "object") return item.role;

    const matched =
      users.find((u) => u.email === item) ||
      localUsers.find((u) => u.email === item);

    return matched?.role || "member";
  };

  const setRole = (email: string, newRole: Role) => {
    if (!isExtended) return;

    const updated = (value as { email: string; role: Role }[]).map((item) =>
      item.email === email ? { ...item, role: newRole } : item
    );
    onChange(updated);
  };

  const handleRemove = (emailToRemove: string) => {
    const updated = value.filter(
      (v) => getEmail(v).toLowerCase() !== emailToRemove.toLowerCase()
    );
    onChange(updated);
  };

  const displayedUsers: UserListItem[] = value.map((entry) => {
    const email = getEmail(entry);
    const role = getRole(entry);
    const matched =
      users.find((u) => u.email === email) ||
      localUsers.find((u) => u.email === email);

    const isNew = matched?.role === "new";

    return {
      ...(matched || {
        _id: email,
        name: email.split("@")[0],
        email,
      }),
      role,
      displayRole: isNew ? "new" : role,
    };
  });

  const renderUserList = () => {
    const canChangeRole = editableRoles && availableRoles.length > 1;

    return (
      <ListContainer>
        {displayedUsers.map((user) => {
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
                  {user.displayRole && (
                    <RoleBadge color={roleColors[user.displayRole]}>
                      {t(`Common.roles.${user.displayRole}`)}
                    </RoleBadge>
                  )}
                </Name>
                <Email>{user.email}</Email>
              </MemberInfo>

              {withActions && user._id !== currentUser?._id && (
                <>
                  {isExtended && canChangeRole && (
                    <SelectContainer>
                      <CustomSelect
                        options={availableRoles}
                        value={user.role as Role}
                        onChange={(newRole) =>
                          setRole(user.email, newRole as Role)
                        }
                        getLabel={(r) => t(`Common.roles.${r}`)}
                        getKey={(r) => r ?? ""}
                      />
                    </SelectContainer>
                  )}
                  <RemoveButton
                    type="button"
                    onClick={() => handleRemove(user.email)}
                  >
                    {t("Forms.common.remove")}
                  </RemoveButton>
                </>
              )}
            </MemberRow>
          );
        })}
      </ListContainer>
    );
  };

  const handleAddMembers = async () => {
    if (pendingEmails.length === 0) {
      toast.info(t("Forms.common.nobodyToAdd") as string);
      return;
    }

    const existingEmails = value.map(getEmail);
    const uniqueToAdd = pendingEmails.filter(
      (email) => !existingEmails.includes(email)
    );

    if (uniqueToAdd.length === 0) {
      toast.info(t("Forms.common.allAlreadyAdded") as string);
      setPendingEmails([]);
      return;
    }

    try {
      const resolved: UserBase[] = await dispatch(
        resolveUsersByEmail(uniqueToAdd)
      ).unwrap();

      const resolvedEmails = resolved.map((user) => user.email);
      const unresolvedEmails = uniqueToAdd.filter(
        (email) => !resolvedEmails.includes(email)
      );

      if (unresolvedEmails.length > 0) {
        toast.warn(
          t("Forms.common.someUsersNotFound", {
            count: unresolvedEmails.length,
            all: uniqueToAdd.length,
          }) as string
        );
      }

      const enriched: UserListItem[] = resolved.map((user) => ({
        ...user,
        role: "new" as const,
      }));

      setLocalUsers((prev) => [...prev, ...enriched]);

      const added: Member[] = isExtended
        ? resolved.map((u) => {
            const previous =
              users.find((user) => user.email === u.email) ||
              localUsers.find((user) => user.email === u.email);

            const role: Role =
              previous?.role && previous.role !== "new"
                ? previous.role
                : "viewer";

            return { email: u.email, role };
          })
        : resolved.map((u) => u.email);

      onChange([...value, ...added]);
      setPendingEmails([]);
    } catch (error) {
      toast.error(t("Forms.common.fetchUsersFailed") as string);
    }
  };

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
