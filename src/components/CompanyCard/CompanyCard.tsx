import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectUserEmail } from "@/redux/user/selectors";
import { Company } from "@/redux/companies/companies.types";
import { deleteCompany } from "@/redux/companies/operations";
import MembersAvatarGroup from "@/components/MembersAvatarGroup";
import EditCompanyModal from "@/components/Modals/EditCompanyModal";
import EditCompanyMembersModal from "@/components/Modals/EditCompanyMembersModal";
import {
  Card,
  UpperBlock,
  BottomBlock,
  Logo,
  Name,
  RoleBadge,
  Actions,
  IconButton,
} from "./CompanyCard.styled";
import { HiDotsVertical, HiUserGroup } from "react-icons/hi";

interface Props {
  company: Company;
}

const CompanyCard = ({ company }: Props) => {
  const dispatch = useAppDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditMembersModalOpen, setIsEditMembersModalOpen] = useState(false);
  const myEmail = useAppSelector(selectUserEmail);
  const { t } = useTranslation();
  const theme = useTheme();

  const toggleEditModal = () => {
    setIsEditModalOpen((prev) => !prev);
  };

  const toggleMembersModal = () => {
    setIsEditMembersModalOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteCompany(company._id));
      toast.success(t("Forms.deleteCompany.success") as string);
      toggleEditModal();
    } catch (error) {
      toast.error(
        `${t("Forms.deleteCompany.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  const role = company?.owner?.email === myEmail ? "owner" : "member";
  const members = company.members;

  const roleColors: Record<"owner" | "member", string> = {
    owner: theme.roleOwner,
    member: theme.roleMember,
  };

  return (
    <>
      <Card>
        <UpperBlock>
          <Logo src={company.logo} alt="Logo" />

          <Name>{company.name}</Name>
        </UpperBlock>

        <BottomBlock>
          <RoleBadge color={roleColors[role]}>
            {t(`Common.role.${role}`)}
          </RoleBadge>

          <MembersAvatarGroup members={[...members].reverse()} />
        </BottomBlock>

        <Actions>
          <IconButton onClick={toggleMembersModal}>
            <HiUserGroup size={20} />
          </IconButton>
          {role === "owner" && (
            <IconButton onClick={toggleEditModal}>
              <HiDotsVertical size={20} />
            </IconButton>
          )}
        </Actions>
      </Card>
      {isEditModalOpen && role === "owner" && (
        <EditCompanyModal
          handlerCloseModal={() => toggleEditModal()}
          deleteAction={handleDelete}
          companyId={company._id}
        />
      )}
      {isEditMembersModalOpen && (
        <EditCompanyMembersModal
          handlerCloseModal={() => toggleMembersModal()}
          companyId={company._id}
          withActions={role === "owner"}
        />
      )}
    </>
  );
};

export default CompanyCard;
