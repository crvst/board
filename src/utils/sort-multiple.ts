import { DraggableLocation } from "react-beautiful-dnd";
import { IBoardState } from "../types/common";
import sortList from "./sort-list";

export default function sortMultiple(
  list: IBoardState,
  source: DraggableLocation,
  destination: DraggableLocation,
): IBoardState {
  const current = [...(list[source.droppableId].cards)];
  const next = [...(list[destination.droppableId].cards)];
  const target = current[source.index];

  if (source.droppableId === destination.droppableId) {
    return {
      ...list,
      [source.droppableId]: {
        ...list[source.droppableId],
        cards: sortList(current, source.index, destination.index),
      },
    };
  }
  current.splice(source.index, 1);
  next.splice(destination.index, 0, target);

  return {
    ...list,
    [source.droppableId]: {
      ...list[source.droppableId],
      cards: current ? current : [],
    },
    [destination.droppableId]: {
      ...list[destination.droppableId],
      cards: next ? next : [],
    },
  };
}
