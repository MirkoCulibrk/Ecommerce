import React from "react";
import "./style.scss";
const Button = ({ text, type }) => {
  return (
    <button className={`btn btn-default text-uppercase ${type}`}>{text}</button>
  );
};

export default Button;
