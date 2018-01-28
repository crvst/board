import * as cn from "classnames";
import * as React from "react";
import { DragHandleProps } from "react-beautiful-dnd";
import { Trash2 } from "react-feather";
import * as app from "../../constants/app";
import * as strings from "../../constants/strings";

interface IColumnHeader {
  dragHandleProps?: DragHandleProps | null;
  isDragging: boolean;
  name: string;

  onDeleteButtonClick(): void;
}

const ColumnHeader: React.SFC<IColumnHeader> = ({
  dragHandleProps,
  isDragging,
  name,
  onDeleteButtonClick,
}) => {
  return <header className="flex mb1">
    <h1
      className={cn("flex-auto f6 br1 ph2 mr1 black-50 hover-bg-light-yellow", {
        "bg-light-yellow": isDragging,
      })}
      {...dragHandleProps}
    >
      {name}
    </h1>
    <button
      className="input-reset bw0 ml-auto pa0 bg-transparent yellow hover-red link"
      onClick={onDeleteButtonClick}
      title={strings.DELETE_COLUMN_TITLE}
    >
      <Trash2 size={app.ICON_SIZE}/>
    </button>
  </header>;
};

export default ColumnHeader;
