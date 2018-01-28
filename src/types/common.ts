import { DraggableProps, DraggableProvided } from "react-beautiful-dnd";

export interface ICard {
  id: string;
  value: string;
}

export interface IBoard {
  name: string;
  cards: ICard[];
}

export interface IBoardState {
  [id: string]: IBoard;
}

export interface IColumn {
  data: IBoard;
  id: string;
  index: number;

  remove(id: string): void;
}

// tslint:disable-next-line: interface-name
export interface DraggableProvidedPatched extends DraggableProvided {
  draggableProps?: DraggableProps;
}

// tslint:disable-next-line: interface-name
export interface DraggablePropsPatched extends DraggableProps {
  index: number;
}
