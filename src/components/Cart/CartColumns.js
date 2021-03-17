import React from "react";
import "./cart.scss";
const CartColumns = () => {
  return (
    <div className="text-center d-none column d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-4">
          <p className="text-uppercase ">product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">qty</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
};

export default CartColumns;
