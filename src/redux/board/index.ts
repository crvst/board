import { Action } from "redux";
// @ts-ignore
import * as initialState from "../../store.json";
import { IBoardState } from "../../types/common";
import { CREATE as CREATE_CARD } from "../card";
import { CREATE, REMOVE, SORT, SORT_CARDS } from "./action-types";
import create from "./create";
import createCard from "./create-card";
import remove from "./remove";
import sort from "./sort";
import sortCards from "./sort-cards";

interface IBoardAction extends Action {
  payload: any;
}

export default function board(state: IBoardState = initialState, action: IBoardAction) {
  switch (action.type) {
    case CREATE_CARD:
      return createCard(state, action);
    case CREATE:
      return create(state, action);
    case REMOVE:
      return remove(state, action);
    case SORT:
      return sort(state, action);
    case SORT_CARDS:
      return sortCards(state, action);
    default:
      return state;
  }
}
