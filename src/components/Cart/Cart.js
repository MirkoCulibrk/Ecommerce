import React from "react";
import CartColumns from "./CartColumns";
import CartList from './CartList';
const Cart = () => {
  return (
    <section>
      <CartColumns />
      <CartList></CartList>
    </section>
  );
};

export default Cart;
