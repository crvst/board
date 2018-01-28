import * as React from "react";
import * as strings from "../../constants/strings";
import CreateForm from "../CreateForm";

interface ICreateCard {
  id: string;

  createCard(): void;
}

const CreateCard: React.SFC<ICreateCard> = ({ createCard, id }) => {
  return <CreateForm
    args={{ id }}
    className="ph2 pv1 br1"
    onSubmit={createCard}
    placeholder={strings.ADD_CARD_PLACEHOLDER}
  />;
};

export default CreateCard;
