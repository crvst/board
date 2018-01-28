import { Action } from "redux";
import { IBoardState } from "../../types/common";

interface IRemoveAction extends Action {
  payload: string;
}

export default function remove(state: IBoardState, { payload }: IRemoveAction) {
  const { [payload]: _, ...newState } = state;
  return newState;
}
