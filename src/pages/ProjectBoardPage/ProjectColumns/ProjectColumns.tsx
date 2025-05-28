import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectCurrentProject } from "@/redux/projects/selectors";
import { createColumn, reorderColumns } from "@/redux/columns/operations";
import { ColumnWithTasks } from "@/redux/columns/columns.types";
import { updateTask } from "@/redux/tasks/operations";
import ColumnCard from "@/components/ColumnCard";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { TbEdit } from "react-icons/tb";
import { Wrapper, ColumnsRow, EditOrderButton } from "./ProjectColumns.styled";

type Props = {
  columns: ColumnWithTasks[];
  topOffset?: number;
  withActions?: boolean;
  onEditOrder?: () => void;
};

const ProjectColumns = ({
  columns,
  topOffset = 24,
  withActions = false,
  onEditOrder,
}: Props) => {
  const dispatch = useAppDispatch();
  const projectId = useAppSelector(selectCurrentProject)?._id;
  const [isEditMode, setIsEditMode] = useState(false);
  const { t } = useTranslation();

  const toggleEditMode = () => setIsEditMode((prev) => !prev);

  const getSortedColumns = () => {
    return [...columns].sort((a, b) => a.order - b.order);
  };

  const handleAddColumn = () => {
    if (!projectId) return;

    try {
      const newColumn = {
        name: t("Project.columns.newColumn") as string,
        order: columns.length,
        project: projectId,
      };

      dispatch(createColumn(newColumn));
    } catch (error) {
      toast.error(
        `${t("Project.columns.addFailed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  const handleDragEnd = async (result: DropResult) => {
    const { source, destination, draggableId, type } = result;

    if (!destination) return;

    if (type === "column") {
      if (!isEditMode || source.index === destination.index) return;

      const sortedColumns = getSortedColumns();
      const reordered = [...sortedColumns];
      const [moved] = reordered.splice(source.index, 1);
      reordered.splice(destination.index, 0, moved);

      const updatedColumns = reordered.map((col, index) => ({
        id: col._id,
        order: index,
      }));

      dispatch(reorderColumns({ columns: updatedColumns }))
        .unwrap()
        .catch((err) => {
          toast.error(`${t("Project.columns.reorderFailed")}: ${err.message}`);
        });

      return;
    }

    if (type === "task") {
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      )
        return;

      const sourceColumn = columns.find(
        (col) => col._id === source.droppableId
      );
      const movedTask = sourceColumn?.tasks.find((t) => t._id === draggableId);

      if (!movedTask) return;

      const formData = new FormData();
      formData.append("column", destination.droppableId);

      dispatch(updateTask({ id: result.draggableId, formData }))
        .unwrap()
        .catch((err) => {
          toast.error(`${t("Project.columns.moveTaskFailed")}: ${err.message}`);
        });

      return;
    }
  };

  return (
    <Wrapper>
      {withActions && (
        <EditOrderButton
          type="button"
          topOffset={topOffset + 24}
          data-active={isEditMode}
          onClick={() => {
            toggleEditMode();
            onEditOrder?.();
          }}
        >
          <TbEdit size={20} />
        </EditOrderButton>
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        {isEditMode && withActions ? (
          <Droppable droppableId="columns" direction="horizontal" type="column">
            {(provided) => (
              <ColumnsRow ref={provided.innerRef} {...provided.droppableProps}>
                {getSortedColumns().map((column, index) => (
                  <Draggable
                    draggableId={column._id}
                    index={index}
                    key={column._id}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ColumnCard
                          column={column}
                          withActions={withActions}
                          isEditable={isEditMode}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ColumnsRow>
            )}
          </Droppable>
        ) : (
          <ColumnsRow>
            {getSortedColumns().map((column) => (
              <ColumnCard
                key={column._id}
                column={column}
                withActions={withActions}
              />
            ))}
          </ColumnsRow>
        )}

        {isEditMode && (
          <ColumnCard
            isEmpty
            withActions={withActions}
            onClickEmpty={handleAddColumn}
          />
        )}
      </DragDropContext>
    </Wrapper>
  );
};

export default ProjectColumns;
