declare function require(name: string): any;

import { Action } from "redux";
import { IBoardState } from "../../types/common";

// ts-lint:ignore
const nanoid = require("nanoid");

interface ICreateAction extends Action {
  payload: {
    value: string;
  };
}

export default function create(
  state: IBoardState,
  { payload: { value } }: ICreateAction,
) {
  return {
    ...state,
    [nanoid()]: {
      cards: [],
      name: value,
    },
  };
}
