import React from "react";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import NavBar from "../NavBar";
const Cart = () => {
  return (
    <React.Fragment>
      <NavBar />
      <section className="container cart">
        <CartColumns />
        <CartList />
        <CartTotal />
      </section>
    </React.Fragment>
  );
};

export default Cart;
