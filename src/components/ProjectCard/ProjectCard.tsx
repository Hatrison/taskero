import { useTheme } from "styled-components";
import { format, Locale } from "date-fns";
import { enUS, uk } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import { Project, ProjectRole } from "@/redux/projects/projects.types";
import MembersAvatarGroup from "@/components/MembersAvatarGroup";
import {
  CardWrapperLink,
  ProjectTitle,
  ProjectCompany,
  RoleBadge,
  DateText,
  TitleWrapper,
  BottomBlock,
  AddittionalInfo,
} from "./ProjectCard.styled";

type ProjectCardProps = {
  project: Project;
  role: ProjectRole;
};

const ProjectCard = ({ project, role }: ProjectCardProps) => {
  const { name, company, members, createdAt } = project;
  const { i18n, t } = useTranslation();
  const theme = useTheme();

  const localeMap: Record<string, Locale> = {
    en: enUS,
    uk: uk,
  };

  const currentLocale = localeMap[i18n.language] || enUS;

  const roleColors: Record<ProjectRole, string> = {
    owner: theme.roleOwner,
    editor: theme.roleEditor,
    viewer: theme.roleViewer,
  };

  return (
    <CardWrapperLink to={`/projects/${project._id}`}>
      <TitleWrapper>
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectCompany>{company.name}</ProjectCompany>
      </TitleWrapper>

      <BottomBlock>
        <MembersAvatarGroup members={[...members].reverse()} />
        <AddittionalInfo>
          <RoleBadge color={roleColors[role]}>
            {t(
              `Projects.filters.${role.charAt(0).toUpperCase() + role.slice(1)}`
            )}
          </RoleBadge>
          <DateText>
            {format(new Date(createdAt), "dd MMM yyyy", {
              locale: currentLocale,
            })}
          </DateText>
        </AddittionalInfo>
      </BottomBlock>
    </CardWrapperLink>
  );
};

export default ProjectCard;
