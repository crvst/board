import { DraggableLocation } from "react-beautiful-dnd";
import { Action } from "redux";
import { IBoardState } from "../../types/common";
import { sortMultiple } from "../../utils";

interface ISortCardsAction extends Action {
  payload: {
    source: DraggableLocation;
    destination: DraggableLocation;
  };
}

export default function sortCards(
  state: IBoardState,
  { payload: { source, destination } }: ISortCardsAction,
) {
  return sortMultiple(state, source, destination);
}
