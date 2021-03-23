import React from "react";
import "../style.scss";
import NavBar from "../NavBar";
import MainSlider from "./MainSlider";
const Banner = () => {
  return (
    <section className="banner d-flex">
      <NavBar />
      <div className="container d-flex h-100 align-items-center ">
        <MainSlider />
      </div>
    </section>
  );
};

export default Banner;
