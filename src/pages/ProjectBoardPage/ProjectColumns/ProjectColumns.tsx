import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectCurrentProject } from "@/redux/projects/selectors";
import { createColumn, reorderColumns } from "@/redux/columns/operations";
import { ColumnWithTasks } from "@/redux/columns/columns.types";
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

  const handleDragEnd = (result: DropResult) => {
    if (!isEditMode) return;
    if (!result.destination) return;

    const { source, destination } = result;
    if (source.index === destination.index) return;

    const sortedColumns = getSortedColumns();

    const reordered = [...sortedColumns];
    const [moved] = reordered.splice(source.index, 1);
    reordered.splice(destination.index, 0, moved);

    const updatedColumns = reordered.map((col, index) => ({
      ...col,
      order: index,
    }));

    try {
      dispatch(
        reorderColumns({
          columns: updatedColumns.map((col) => ({
            id: col._id,
            order: col.order,
          })),
        })
      );
    } catch (error) {
      toast.error(
        `${t("Project.columns.reorderFailed")}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
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

      {isEditMode ? (
        <DragDropContext onDragEnd={handleDragEnd}>
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
        </DragDropContext>
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
          onClickEmpty={() => handleAddColumn()}
        />
      )}
    </Wrapper>
  );
};

export default ProjectColumns;
