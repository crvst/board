import * as cn from "classnames";
import * as React from "react";
import { DraggableStateSnapshot } from "react-beautiful-dnd";
import * as app from "../../constants/app";
import * as strings from "../../constants/strings";
import { DraggableProvidedPatched, IColumn } from "../../types/common";
import CardsList from "../CardsList";
import CreateCardContainer from "../CreateCard/CreateCardContainer";
import DraggablePatched from "../DraggablePatched";
import ColumnHeader from "./ColumnHeader";

const Column: React.SFC<IColumn> = ({
  data,
  remove,
  id,
  index,
}) => {
  return <section
    className="flex-column w-25-l w-third-m w-90"
    style={{
      maxWidth: app.COLUMN_MAX_WIDTH,
      minWidth: app.COLUMN_MIN_WIDTH,
    }}
  >
    <DraggablePatched
      draggableId={id}
      index={index}
    >
      {
        (
          {
            innerRef,
            draggableProps,
            dragHandleProps,
            placeholder,
          }: DraggableProvidedPatched,
          {
            isDragging,
          }: DraggableStateSnapshot,
        ) =>
          <>
            <div
              className={cn("pa2 pb1 br2 bg-washed-yellow ba b--yellow mh1", {
                "o-90 shadow-4": isDragging,
              })}
              ref={innerRef}
              {...draggableProps}
            >
              <ColumnHeader
                dragHandleProps={dragHandleProps}
                isDragging={isDragging}
                name={data.name}
                onDeleteButtonClick={handleDelete}
              />
              <CardsList
                id={id}
                cards={data.cards}
                type="ITEM"
              />
              <footer>
                <CreateCardContainer id={id}/>
              </footer>
            </div>
            {placeholder}
          </>
      }
    </DraggablePatched>
  </section>;

  function handleDelete(): void {
    if (confirm(`${strings.DELETE_COLUMN_CONFIRMATION} “${data.name}”?`)) {
      remove(id);
    }
  }
};

export default Column;
