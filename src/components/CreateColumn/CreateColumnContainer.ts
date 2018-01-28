import { connect } from "react-redux";
import { ActionCreator, AnyAction } from "redux";
import { create } from "../../redux/board/actions";
import CreateColumnForm from "./";

export default connect<null, {
  create: ActionCreator<AnyAction>,
}, {}>(null, {
  create,
})(CreateColumnForm);
