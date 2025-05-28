import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks";
import { deleteTask } from "@/redux/tasks/operations";
import { Task } from "@/redux/tasks/tasks.types";
import MembersAvatarGroup from "@/components/MembersAvatarGroup";
import EditTaskModal from "@/components/Modals/EditTaskModal";
import {
  BottomRow,
  Card,
  DateText,
  PriorityTag,
  Title,
  TopRow,
} from "./TaskCard.styled";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  const { title, deadline, priority, assignedTo } = task;
  const dispatch = useAppDispatch();
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleDeleteTask = async () => {
    if (!task?._id) return;

    try {
      await dispatch(deleteTask(task._id));
      toast.success(t("Forms.deleteTask.success") as string);
    } catch (error) {
      toast.error(
        `${t("Forms.deleteTask.failed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  const toggleEditTaskModal = () => {
    setIsEditTaskModalOpen((prev) => !prev);
  };

  const formatPriority = (p: string) => p.charAt(0).toUpperCase() + p.slice(1);

  return (
    <>
      <Card onClick={toggleEditTaskModal}>
        <TopRow>
          <Title>{title}</Title>
          <PriorityTag $priority={priority}>
            {formatPriority(priority)}
          </PriorityTag>
        </TopRow>

        <BottomRow>
          <MembersAvatarGroup members={assignedTo} />
          {deadline && <DateText>{deadline?.slice(0, 10)}</DateText>}
        </BottomRow>
      </Card>

      {isEditTaskModalOpen && (
        <EditTaskModal
          task={task}
          handlerCloseModal={toggleEditTaskModal}
          deleteAction={handleDeleteTask}
          withActions
        />
      )}
    </>
  );
};

export default TaskCard;
