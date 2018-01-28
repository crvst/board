import * as cn from "classnames";
import * as React from "react";
import { CornerDownLeft } from "react-feather";

interface ICreateForm {
  args?: {
    [key: string]: any;
  };
  className?: string;
  placeholder: string;
  style?: React.CSSProperties;

  onSubmit(payload: {
    args?: {
      [key: string]: any;
    }
    value: string;
  }): void;
}

export default class CreateForm extends React.PureComponent<ICreateForm> {
  private _input: HTMLInputElement | null = null;

  public handleSubmit(e: React.SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();
    const { onSubmit, args = {} } = this.props;
    if (this._input && this._input.value.trim()) {
      // tslint:disable-next-line: no-unused-expression
      onSubmit && onSubmit({
        ...args,
        value: this._input.value.trim(),
      });
      this._input.value = "";
    }
  }

  public render() {
    const { placeholder, className, style } = this.props;
    return <form
      action="POST"
      onSubmit={this.handleSubmit.bind(this)}
    >
      <div
        className="relative"
        style={style}
      >
        <input
          className={cn("w-100 input-reset ba w-100 bg-white b--yellow f6 o-50 sans-serif", className)}
          placeholder={placeholder}
          ref={(node) => {this._input = node; }}
          type="text"
        />
        <button
          className="h-100 input-reset bw0 ml-auto pa0 bg-transparent yellow hover-black link absolute right-0 mr1"
        >
          <CornerDownLeft
            className="v-mid"
            size={12}
          />
        </button>
      </div>
    </form>;
  }
}
