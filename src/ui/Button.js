import React from "react";
import "./style.scss";
const Button = ({ text, type,isDefault }) => {
  return (
    <button className={`btn ${isDefault?'btn-default':''} text-uppercase ${type}`}>{text}</button>
  );
};

export default Button;
