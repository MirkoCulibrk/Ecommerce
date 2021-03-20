import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import Main from "./components/Banner/Banner";
function App() {
  return (
    <React.Fragment>
      <Main />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
