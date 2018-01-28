import * as cn from "classnames";
import * as React from "react";
import { DraggableProvidedPatched } from "../../types/common";

interface ICard {
  isDragging: boolean;
  provided: DraggableProvidedPatched;
  value: string;
}

const Card: React.SFC<ICard> = ({
  isDragging,
  provided: {
    draggableProps,
    dragHandleProps,
    innerRef,
  },
  value,
}) => {
  return <div
    className="mb2"
    ref={innerRef}
    {...draggableProps}
    {...dragHandleProps}
  >
    <p
      className={cn("pa2 br1 ba hover-bg-white-70", {
        "bg-white b--light-yellow": !isDragging,
        "bg-white-80 b--yellow shadow-4": isDragging,
      })
      }
      style={{
        WebkitBackdropFilter: isDragging ? "blur(2px)" : "none",
        userSelect: "none",
      }}
    >
      {value}
    </p>
  </div>;
};

export default Card;
