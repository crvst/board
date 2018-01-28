import * as React from "react";
import {
  DragDropContext,
  DraggableLocation,
  Droppable,
} from "react-beautiful-dnd";
import * as app from "../../constants/app";
import ColumnContainer from "../Column/ColumnContainer";
import CreateColumnContainer from "../CreateColumn/CreateColumnContainer";

interface IBoard {
  board: {
    [id: string]: {
      name: string;
      cards: Array<{
        id: string;
        value: string;
      }>
    },
  };

  sort(payload: any): void;

  sortCards(payload: any): void;
}

const Board: React.SFC<IBoard> = ({
  board,
  sort,
  sortCards,
}) => {
  return <DragDropContext onDragEnd={handleDragEnd}>
    <Droppable
      direction="horizontal"
      droppableId="board"
      type={app.COLUMN_TYPE}
    >
      {({ innerRef }) => (
        <div
          className="flex"
          ref={innerRef}
        >
          {Object.keys(board).map((id: string, index: number) =>
            <ColumnContainer
              data={board[id]}
              id={id}
              index={index}
              key={id}
            />,
          )}
          <aside>
            <CreateColumnContainer/>
          </aside>
        </div>
      )}
    </Droppable>
  </DragDropContext>;

  function handleDragEnd({
    destination,
    source,
    type,
  }: {
    destination?: DraggableLocation | null,
    source: DraggableLocation,
    type: string,
  }): void {
    if (!destination) { return; }
    const payload = { destination, source };
    if (type === app.COLUMN_TYPE) {
      sort(payload);
    } else {
      sortCards(payload);
    }
  }
};

export default Board;
