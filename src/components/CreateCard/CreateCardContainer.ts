import { connect } from "react-redux";
import { createCard } from "../../redux/card";
import CreateCard from "./";

export default connect<null, {
  createCard: any,
}, any>(null, {
  createCard,
})(CreateCard);
