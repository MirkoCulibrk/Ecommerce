import React from "react";
import ReactDOM from "react-dom";
import './style.scss';
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <React.Fragment>
      <Cart />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
