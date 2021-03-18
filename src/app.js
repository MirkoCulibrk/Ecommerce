import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import Cart from "./components/Cart/Cart";
import Detail from "./components/Detail/Detail";
import NavBar from "./components/NavBar";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Detail />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
