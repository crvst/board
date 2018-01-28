import * as React from "react";
import BoardContainer from "../Board/BoardContainer";
import Footer from "../Footer";
import Main from "../Main";

const App: React.SFC<{}> = () => {
  return <div className="h-100">
    <div className="h-100 flex flex-column">
      <Main>
        <BoardContainer/>
      </Main>
      <Footer/>
    </div>
  </div>;
};

export default App;
