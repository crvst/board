import { DraggableLocation } from "react-beautiful-dnd";
import { Action } from "redux";
import { IBoardState } from "../../types/common";
import { sortList } from "../../utils";

interface ISortAction extends Action {
  payload: {
    source: DraggableLocation;
    destination: DraggableLocation;
  };
}

export default function sort(
  state: IBoardState,
  { payload: { source, destination } }: ISortAction,
) {
  const sorted = sortList(Object.keys(state), source.index, destination.index);
  return sorted.reduce((acc, name) => {
    acc[name] = state[name];
    return acc;
  }, {});
}
