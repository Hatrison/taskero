import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectCurrentCompany } from "@/redux/companies/selectors";
import { fetchMyProjects } from "@/redux/projects/operations";
import { selectProjects } from "@/redux/projects/selectors";
import { ProjectRole } from "@/redux/projects/projects.types";
import { selectUserEmail } from "@/redux/user/selectors";
import ProjectCard from "@/components/ProjectCard";
import CustomSelect from "@/components/CustomSelect";
import CreateProjectModal from "@/components/Modals/CreateProjectModal";
import {
  PageWrapper,
  PageHeader,
  Title,
  TopBar,
  SearchInput,
  Grid,
  CreateButton,
  SelectWrapper,
  UpperBlock,
} from "./ProjectListPage.styled";

const ProjectListPage = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Projects");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const company = useAppSelector(selectCurrentCompany);
  const projects = useAppSelector(selectProjects);
  const myEmail = useAppSelector(selectUserEmail);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchMyProjects());
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCreateProject = () => {
    toggleModal();
  };

  const filteredProjects = projects.filter((project) => {
    const myRole: ProjectRole = project.members.find(
      (member) => member.user.email === myEmail
    )?.role as ProjectRole;

    const matchesCompany = project.company._id === company?._id;

    const matchesSearch = project.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const isAllSelected = filter === "All Projects";
    const isRoleMatch = myRole?.toLowerCase() === filter.toLowerCase();

    const matchesFilter = isAllSelected || isRoleMatch;
    return matchesCompany && matchesSearch && matchesFilter;
  });

  return (
    <PageWrapper>
      <UpperBlock>
        <PageHeader>
          <Title>{t("Projects.title")}</Title>
          <CreateButton onClick={() => handleCreateProject()}>
            {t("Projects.create")}
          </CreateButton>
        </PageHeader>

        <TopBar>
          <SearchInput
            type="text"
            placeholder={t("Projects.searchPlaceholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SelectWrapper>
            <CustomSelect
              options={["All Projects", "Owner", "Editor", "Viewer"]}
              value={filter}
              onChange={setFilter}
              getLabel={(r) => t(`Projects.filters.${r}`)}
              getKey={(r) => r}
            />
          </SelectWrapper>
        </TopBar>
      </UpperBlock>

      <Grid>
        {filteredProjects.map((project) => {
          const myRole: ProjectRole = project.members.find(
            (member) => member.user.email === myEmail
          )?.role as ProjectRole;

          return (
            <ProjectCard
              key={project._id}
              project={project}
              role={myRole || "viewer"}
            />
          );
        })}
      </Grid>
      {isModalOpen && <CreateProjectModal handlerCloseModal={toggleModal} />}
    </PageWrapper>
  );
};

export default ProjectListPage;
