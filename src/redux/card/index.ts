import actionTypes from "actiontypes";
import { Action } from "redux";
import { createAction } from "redux-actions";
import { ICard } from "../../types/common";
import create from "./create";

export const { CREATE } = actionTypes("card", "CREATE");
export const createCard = createAction(CREATE);

interface ICreateCardAction extends Action {
  payload: {
    value: string;
  };
}

export default function reducer(
  state: ICard[] = [],
  { type, payload: { value } }: ICreateCardAction,
) {
  switch (type) {
    case CREATE:
      return create(state, value);
    default:
      return state;
  }
}
