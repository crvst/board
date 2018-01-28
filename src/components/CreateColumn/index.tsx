import * as React from "react";
import { Action } from "redux-actions";
import * as app from "../../constants/app";
import * as strings from "../../constants/strings";
import CreateForm from "../CreateForm";

interface ICreateColumn {
  create(payload: {
    value: string;
  }): Action<{
    value: string;
  }>;
}

const CreateColumn: React.SFC<ICreateColumn> = ({ create }) => {
  return <CreateForm
    className="b o-70 pa2 br2"
    onSubmit={create}
    placeholder={strings.ADD_COLUMN_PLACEHOLDER}
    style={{
      minWidth: app.COLUMN_MIN_WIDTH,
    }}
  />;
};

export default CreateColumn;
