import { Action } from "redux";
import { IBoardState } from "../../types/common";
import card from "../card";

interface ICreateCardAction extends Action {
  payload: {
    id: string;
    value: string;
  };
}

export default function createCard(state: IBoardState, action: ICreateCardAction) {
  const { payload: { id } } = action;
  const column = state[id];
  return {
    ...state,
    [id]: {
      ...column,
      cards: card(column.cards, action),
    },
  };
}
