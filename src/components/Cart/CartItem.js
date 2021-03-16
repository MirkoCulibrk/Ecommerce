import React from 'react'
import './cart.scss';
const CartItem = () => {
    return (
        <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src="{img}"
            style={{ width: "5rem", height: "5rem" }}
            alt="image"
            className="img-fluid"
          />
          <div className="col-10 col-lg-2 mx-auto">
            <h3 className="text-uppercase">Beats Studio Wireless</h3>
            <p>Get the most out of your music with an experience.</p>
            <div className="row">
              <div className="star">
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product : </span>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price : </span>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span className="btn btn-black mx-10" onClick={() => decrement(id)}>
                -
              </span>
              <span className="btn btn-black mx-1">0</span>
              <span className="btn btn-black mx-10" onClick={() => increment(id)}>
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={() => removeItem(id)}>
            <i className="fas fa-trash"></i>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong>item total: $ </strong>
        </div>
      </div>
    )
}

export default CartItem
