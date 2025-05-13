import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectCurrentCompany } from "@/redux/companies/selectors";
import { fetchMyProjects } from "@/redux/projects/operations";
import {
  selectProjects,
  selectProjectsLoading,
} from "@/redux/projects/selectors";
import { ProjectRole } from "@/redux/projects/projects.types";
import { selectUserEmail } from "@/redux/user/selectors";
import Loader from "@/components/Loader";
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
  LoaderContainer,
} from "./ProjectListPage.styled";

const ProjectListPage = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Projects");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loading = useAppSelector(selectProjectsLoading);
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

  const filteredProjectsWithRole = useMemo(() => {
    return projects
      .map((project) => {
        const role = project.members.find(
          (member) => member.user.email === myEmail
        )?.role as ProjectRole;

        return { project, role };
      })
      .filter(({ project, role }) => {
        const matchesCompany = project.company._id === company?._id;
        const matchesSearch = project.name
          .toLowerCase()
          .includes(search.toLowerCase());

        const isAllSelected = filter === "All Projects";
        const isRoleMatch = role?.toLowerCase() === filter.toLowerCase();

        return (
          matchesCompany && matchesSearch && (isAllSelected || isRoleMatch)
        );
      });
  }, [projects, company?._id, myEmail, search, filter]);

  return (
    <PageWrapper>
      {loading ? (
        <LoaderContainer>
          <Loader size="48px" color="#3e85f3" />
        </LoaderContainer>
      ) : (
        <>
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
            {filteredProjectsWithRole.map(({ project, role }) => (
              <ProjectCard key={project._id} project={project} role={role} />
            ))}
          </Grid>
          {isModalOpen && (
            <CreateProjectModal
              handlerCloseModal={toggleModal}
              hasDeleteAction
            />
          )}
        </>
      )}
    </PageWrapper>
  );
};

export default ProjectListPage;
