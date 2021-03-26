import React from "react";
import Stars from "../../../ui/Rating/Stars";
import Button from "../../../ui/Button";
import { Link } from "react-router-dom";
const Product = ({ product, showLayout }) => {
  
  function renderProduct() {
    if (showLayout === "grid") {
      return (
        <div className="col-lg-4 ">
          <div className="img-container">
            <Link to="/detail">
              <img src={product.imgUrl} alt={product.name} />
            </Link>
          </div>
          <div className="info-container d-flex flex-column">
            <h5 className="text-uppercase">{product.name}</h5>
            <p>{product.description}</p>
            <div className="info-container--info d-flex flex-row">
              <h6>{`$${product.price}`}</h6>
              {/* stars */}
              <div className="info-container--stars-container">
                <Stars disable initialStars={product.stars}>
                  {" "}
                </Stars>
              </div>
            </div>
          </div>
          <div className="button-container">
            <Button text={"Add to Cart"} />
          </div>
        </div>
      );
    } else if (showLayout === "list") {
      return (
        <div className="col-12 list d-flex flex-row ">
          <div className="img-container">
            <img src={product.imgUrl} alt={product.name} />
          </div>
          <div className="info-container d-flex flex-column justify-content-center">
            <h5 className="text-uppercase">{product.name}</h5>
            <p>{product.description}</p>
            <div className="info-container--info d-flex flex-row">
              <h6>{`$${product.price}`}</h6>
              {/* stars */}
              <div className="info-container--stars-container">

                <Stars disable initialStars={product.stars}> </Stars>
              </div>
            </div>
          </div>  
        </div>
      );
    }
  }
  return <React.Fragment>{renderProduct()}</React.Fragment>;
};

export default Product;
