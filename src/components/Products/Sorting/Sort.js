import React from "react";

const Sort = ({ sortProducts, sort }) => {
  return (
    <div className="filter-sort d-flex flex-row">
      <h4 className="text-uppercase">Sort by:</h4>
      <select value={sort} onChange={sortProducts}>
        <option>Latest</option>
        <option value="lowest">Lowest to Higest</option>
        <option value="highest">Higest to Lowest</option>
      </select>
    </div>
  );
};

export default Sort;
