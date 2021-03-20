import React from "react";
// import Swiper core and required modules

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
import "../style.scss";
import NavBar from "../NavBar";
import Button from "../../ui/Button";
import picture from "../../img/big.png";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Banner = () => {
  console.log("s");
  return (
    <section className="banner">
      <NavBar />
      <div className="container d-flex align-items-center">
        <Swiper
         navigation
         pagination
         spaceBetween={0}
         slidesPerView={1}
         onInit={(swiper) => console.log('Swiper initialized!', swiper)}
         onSlideChange={(swiper) => {
           console.log('Slide index changed to: ', swiper.activeIndex);
         }}
        >
          <SwiperSlide>
            <div className="col-lg-12 d-flex ">
              <div className="col-lg-6 banner--info">
                <h1 className="text-uppercase">Got No Strings</h1>
                <p>
                  Get the most out of your music with an award-winning,
                  emotionally charged Beats listening experience.
                </p>
                <Button type={"checkout"} text={"show item"} />
              </div>
              <div className="col-lg-6 banner--img">
                <img src={picture} alt="pic" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-lg-12 d-flex ">
              <div className="col-lg-6 banner--info">
                <h1 className="text-uppercase">Got No Strings</h1>
                <p>
                  Get the most out of your music with an award-winning,
                  emotionally charged Beats listening experience.
                </p>
                <Button type={"checkout"} text={"show item"} />
              </div>
              <div className="col-lg-6 banner--img">
                <img src={picture} alt="pic" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
