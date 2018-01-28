declare function require(name: string): any;

import { ICard } from "../../types/common";

const nanoid = require("nanoid");

export default function create(state: ICard[], value: string) {
  return state.concat({
    id: nanoid(),
    value,
  });
}
