import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { FiEdit3, FiTrash2, FiCheck, FiX, FiPlus } from "react-icons/fi";
import { useAppDispatch } from "@/hooks";
import { deleteColumn, updateColumn } from "@/redux/columns/operations";
import { ColumnWithTasks } from "@/redux/columns/columns.types";
import TaskCard from "@/components/TaskCard";
import CreateTaskModal from "@/components/Modals/CreateTaskModal";
import Loader from "@/components/Loader";
import {
  Draggable,
  Droppable,
  DraggableProvided,
  DroppableProvided,
} from "@hello-pangea/dnd";
import {
  Wrapper,
  Header,
  Title,
  TitleInput,
  Tasks,
  Placeholder,
  InlineControls,
  ControlButton,
  AddButton,
} from "./ColumnCard.styled";

type Props = {
  column?: ColumnWithTasks;
  isEmpty?: boolean;
  withActions?: boolean;
  isEditable?: boolean;
  onClickEmpty?: () => void;
};

const priorityMap: Record<string, number> = {
  critical: 3,
  high: 2,
  medium: 1,
  low: 0,
};

const ColumnCard = ({
  column,
  isEmpty,
  withActions,
  isEditable = false,
  onClickEmpty,
}: Props) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(column?.name || "");
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();

  const sortedTasks = useMemo(() => {
    if (!column?.tasks) return [];
    return [...column.tasks].sort((a, b) => {
      const pa = priorityMap[a.priority] ?? 0;
      const pb = priorityMap[b.priority] ?? 0;
      return pb - pa;
    });
  }, [column?.tasks]);

  if (isEmpty) {
    if (!withActions) return null;

    return (
      <Wrapper isEmpty onClick={onClickEmpty}>
        <Placeholder>
          <AddButton>
            <FiPlus size={16} /> {t("Project.columns.addColumn")}
          </AddButton>
        </Placeholder>
      </Wrapper>
    );
  }

  if (!column) {
    return (
      <Wrapper isEmpty>
        <Placeholder loading>
          <Loader size="60px" color="#3e85f3" />
        </Placeholder>
      </Wrapper>
    );
  }

  const handleSave = () => {
    if (!column?._id) return;

    try {
      dispatch(
        updateColumn({
          id: column._id,
          data: { name: title },
        })
      );
    } catch (error) {
      toast.error(
        `${t("Project.columns.updateFailed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    } finally {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setTitle(column?.name || "");
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (!column?._id) return;

    try {
      dispatch(deleteColumn(column._id));
    } catch (error) {
      toast.error(
        `${t("Project.columns.deleteFailed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  const toggleCreateTaskModal = () => {
    setIsCreateTaskModalOpen((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <Header>
          {isEditing ? (
            <>
              <TitleInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
              <InlineControls>
                <ControlButton
                  type="button"
                  hoverColor={theme.success}
                  onClick={() => handleSave()}
                >
                  <FiCheck size={20} />
                </ControlButton>
                <ControlButton
                  type="button"
                  hoverColor={theme.primaryHover}
                  onClick={() => handleCancel()}
                >
                  <FiX size={20} />
                </ControlButton>
                <ControlButton
                  type="button"
                  hoverColor={theme.danger}
                  onClick={() => handleDelete()}
                >
                  <FiTrash2 size={20} />
                </ControlButton>
              </InlineControls>
            </>
          ) : (
            <>
              <Title>{column?.name}</Title>
              {withActions && (
                <InlineControls>
                  {isEditable && (
                    <ControlButton
                      type="button"
                      onClick={() => setIsEditing(true)}
                    >
                      <FiEdit3 size={20} />
                    </ControlButton>
                  )}
                  <ControlButton
                    type="button"
                    onClick={() => toggleCreateTaskModal()}
                  >
                    <FiPlus size={20} />
                  </ControlButton>
                </InlineControls>
              )}
            </>
          )}
        </Header>

        {withActions ? (
          <Droppable droppableId={column._id} type="task">
            {(provided: DroppableProvided) => (
              <Tasks ref={provided.innerRef} {...provided.droppableProps}>
                {sortedTasks.map((task, index) => (
                  <Draggable
                    draggableId={task._id}
                    index={index}
                    key={task._id}
                  >
                    {(provided: DraggableProvided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskCard task={task} withActions={withActions} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Tasks>
            )}
          </Droppable>
        ) : (
          <Tasks>
            {sortedTasks.map((task) => (
              <TaskCard key={task._id} task={task} withActions={withActions} />
            ))}
          </Tasks>
        )}
      </Wrapper>

      {isCreateTaskModalOpen && (
        <CreateTaskModal
          handlerCloseModal={toggleCreateTaskModal}
          columnId={column?._id}
        />
      )}
    </>
  );
};

export default ColumnCard;
