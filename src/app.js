import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "components/Main";
import Detail from 'components/Detail/Detail';
import Cart from "components/Cart/Cart";
import "./style.scss";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </React.Fragment>
  );
}

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
