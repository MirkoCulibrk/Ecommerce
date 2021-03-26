import React from "react";
import Product from "./Product";
const ProductList = ({ data, showLayout }) => {
  return (
    <React.Fragment>
      {data.map(product => (
        <Product product={product} showLayout={showLayout} key={product.id} />
      ))}
    </React.Fragment>
  );
};

export default ProductList;
