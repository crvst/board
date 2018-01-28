import { createAction } from "redux-actions";
import { CREATE, REMOVE, SORT, SORT_CARDS } from "./action-types";

export const create = createAction(CREATE);
export const remove = createAction(REMOVE);
export const sort = createAction(SORT);
export const sortCards = createAction(SORT_CARDS);
