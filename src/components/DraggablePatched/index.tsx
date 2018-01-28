import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

const DraggablePatched: React.SFC<any> = (props) =>
  // @ts-ignore
  <Draggable {...props}>{props.children}</Draggable>;

export default DraggablePatched;
