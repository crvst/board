import * as React from "react";

interface IMain {
  children: React.ReactElement<{
    [prop: string]: any;
  }>;
}

const Main: React.SFC<IMain> = ({ children }) => {
  return <main
    className="flex flex-column flex-auto flex-shrink-0"
    role="main"
  >
    <div className="flex-auto bg-white pv2 ph1 ma2 mb0 br2 overflow-x-scroll">
      {children}
    </div>
  </main>;
};

export default Main;
