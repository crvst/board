import { connect } from "react-redux";
import { sort, sortCards } from "../../redux/board/actions";
import { IBoardState } from "../../types/common";
import Board from "./";

export default connect<{
  board: any;
}, {
  sort: any;
  sortCards: any;
}, {}>(
  ({ board }: { board: IBoardState }) => ({
    board,
  }), {
    sort,
    sortCards,
  })(Board);
