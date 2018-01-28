import * as React from "react";
import { DraggableStateSnapshot, Droppable } from "react-beautiful-dnd";
import { DraggableProvidedPatched } from "../../types/common";
import Card from "../Card";
import DraggablePatched from "../DraggablePatched";

interface ICardsList {
  cards: Array<{
    id: string;
    value: string;
  }>;
  id: string;
  type: string;
}

const CardsList: React.SFC<ICardsList> = ({
  cards,
  id,
  type,
}) => {
  return <Droppable
    droppableId={id}
    type={type}
  >
    {({ innerRef, placeholder }) =>
      <div
        ref={innerRef}
        style={{
          minHeight: "7em",
        }}
      >
        {cards.map(({ id: cardId, value }, index) => {
            return <DraggablePatched
              draggableId={cardId}
              key={cardId}
              index={index}
            >
              {
                (
                  provided: DraggableProvidedPatched,
                  { isDragging }: DraggableStateSnapshot,
                ) =>
                  <>
                    <Card
                      isDragging={isDragging}
                      key={cardId}
                      provided={provided}
                      value={value}
                    />
                    {provided.placeholder}
                  </>}
            </DraggablePatched>;
          },
        )}
        {placeholder}
      </div>}
  </Droppable>;
};

export default CardsList;
