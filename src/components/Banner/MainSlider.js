import React, { Component } from "react";
import Swiper from "swiper";
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Button from 'ui/Button';
import 'swiper/swiper-bundle.css';
import "../style.scss";
import pic from "img/pic.png";
SwiperCore.use([Navigation, Pagination]);
export default class MainSlider extends Component {
    constructor(props){
        super(props);
    }
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: 1,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
      },
      navigation: {
        nextEl: ".swiper-button-next", // arrows on the side of the slides
        prevEl: ".swiper-button-prev" // arrows on the side of the slides
      }
    });
  }
  render() {
      console.log(pic)
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide d-flex">
            <div className="col-lg-12 d-flex padding">
              <div className="col-lg-6 banner--info">
                <h1 className="text-uppercase">Got No Strings</h1>
                <p>
                  Get the most out of your music with an award-winning,
                  emotionally charged Beats listening experience.
                </p>
                <Button type={"btn-show"}  text={"show item"} />
              </div>
              <div className="col-lg-6 banner--img">
                <img src={pic} alt="pic" />
              </div>
            </div>
          </div>
          <div className="swiper-slide d-flex">
            <div className="col-lg-12 d-flex padding">
              <div className="col-lg-6 banner--info">
                <h1 className="text-uppercase">Got No Strings</h1>
                <p>
                  Get the most out of your music with an award-winning,
                  emotionally charged Beats listening experience.
                </p>
                <Button type={"btn-show"}  text={"show item"} />
              </div>
              <div className="col-lg-6 banner--img">
                <img src={pic} alt="pic" />
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination" />
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    );
  }
}
