import React from "react";
import { FaTrash } from "react-icons/fa";
import "./cart.scss";
import Pic from "../../img/pic.png";
const CartItem = () => {
  console.log(Pic);
  return (
    <div className="row my-2 text-capitalize text-center item border-bottom">
      <div className="col-12 mx-auto col-lg-4 product">
        <img
          src={Pic}
          style={{ width: "5rem", height: "5rem" }}
          alt="image"
          className="img-fluid img"
        />
        <div className="">
          <h3 className="text-uppercase">Beats Studio Wireless</h3>
          <p>Get the most out of your music with an experience.</p>
          <div className="row">
            <div className="star" />
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="span">$1250 </span>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 btn-controls">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-10" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1 count">0</span>
            <span className="btn btn-black mx-10" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className=" btn cart-icon" onClick={() => removeItem(id)}>
          <FaTrash />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong> $ 100</strong>
      </div>
    </div>
  );
};

export default CartItem;
