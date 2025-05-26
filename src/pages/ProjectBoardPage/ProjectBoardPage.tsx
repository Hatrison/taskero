import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectUser } from "@/redux/user/selectors";
import { deleteProject, fetchProjectById } from "@/redux/projects/operations";
import {
  selectCurrentProject,
  selectProjectsLoading,
} from "@/redux/projects/selectors";
import Loader from "@/components/Loader";
import EditProjectMembersModal from "@/components/Modals/EditProjectMembersModal/EditProjectMembersModal";
import EditProjecModal from "@/components/Modals/EditProjectModal";
import Header from "./Header";
import {
  BoardContainer,
  LoadContainer,
  PageWrapper,
} from "./ProjectBoardPage.styled";

const ProjectBoardPage = () => {
  const { id: projectId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUser);
  const project = useAppSelector(selectCurrentProject);
  const isLoading = useAppSelector(selectProjectsLoading);
  const [isEditMembersModalOpen, setIsEditMembersModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [canEditProject, setCanEditProject] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (projectId) {
      dispatch(fetchProjectById(projectId));
    }
  }, [dispatch, projectId]);

  useEffect(() => {
    const owners =
      project?.members
        ?.filter((member) => member.role === "owner")
        .map((member) => member.user._id) || [];

    const isCurrentUserOwner = owners.includes(currentUser._id);
    setCanEditProject(isCurrentUserOwner);
  }, [currentUser, project]);
  const handleDelete = async () => {
    if (!projectId || !project) return;

    try {
      await dispatch(deleteProject(project._id));
      toast.success(t("Forms.deleteProject.success") as string);
      toggleSettingsModal();
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(
        `${t("Forms.deleteProject.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  const toggleMembersModal = () => {
    setIsEditMembersModalOpen((prev) => !prev);
  };

  const toggleSettingsModal = () => {
    setIsSettingsModalOpen((prev) => !prev);
  };

  return (
    <PageWrapper>
      <Header
        name={project?.name || ""}
        avatar={currentUser.avatar}
        toggleMembersModal={toggleMembersModal}
        toggleSettingsModal={toggleSettingsModal}
      />

      {isLoading ? (
        <LoadContainer>
          <Loader size="60px" color="#3e85f3" />
        </LoadContainer>
      ) : (
        <BoardContainer>Columns</BoardContainer>
      )}

      {isEditMembersModalOpen && (
        <EditProjectMembersModal
          handlerCloseModal={() => toggleMembersModal()}
          projectId={projectId || ""}
          withActions={canEditProject}
        />
      )}

      {isSettingsModalOpen && (
        <EditProjecModal
          handlerCloseModal={() => toggleSettingsModal()}
          deleteAction={() => handleDelete()}
          withActions={canEditProject}
        />
      )}
    </PageWrapper>
  );
};

export default ProjectBoardPage;
