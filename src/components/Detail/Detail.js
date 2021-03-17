import React from "react";
import Option from '../../ui/options/Option';
import './detail.scss';
const Detail = () => {
    const options=[1,2,3,4,5];
  return (
    <div className="container">
      <div className="col-lg-6">
        <h1 className="text-upperase">Beats Solo3 wireless</h1>
        <div className="star-container" />
        <p>
          With up to 40 hours of battery life, Beats Solo3 Wireless is your
          perfect everyday headphone. Get the most out of your music with an
          award-winning, emotionally charged Beats listening experience.
        </p>
      </div>
      <form action="" id="form">
      <Option options={options} type="number"></Option>
          <Option options={options} type="colors"></Option>
      </form>
    </div>
  );
};

export default Detail;
