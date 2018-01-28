import { connect } from "react-redux";
import { remove } from "../../redux/board/actions";
import Column from "./";

export default connect<null, {
  remove: any,
}, any>(null, {
  remove,
})(Column);
