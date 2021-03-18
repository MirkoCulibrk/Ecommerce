import React from "react";
import Button from "../../ui/Button";
const CartTotal = () => {
  return (
    <div className="row d-flex justify-content-end cart-total align-items-center">
      <div className="col-lg-3 col-12 d-inline-flex align-items-center justify-content-center col-sm-6">
        <h4 className="total-text text-uppercase">grand total</h4>
        <h4 className="price">$3000</h4>
      </div>
      <div className="col-lg-2 col-12 col-sm-6">
        {/* checkout btn */}
        <div className="btn-container justify-content-center d-flex">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
