import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import App from "./components/App";
import "./index.styl";
import reducer from "./redux/reducer";

const devtoolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
let composeEnhancers = compose;
if (devtoolsCompose) {
  composeEnhancers = devtoolsCompose({});
}
const enhancer = composeEnhancers();
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
