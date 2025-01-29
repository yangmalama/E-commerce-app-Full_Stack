import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import sliderImageOne from "../../public/slide-1.jpg";
import sliderImageTwo from "../../public/slide-2.jpg";

export default function HeroSectionSlider() {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-10/12 mx-auto rounded-md">
        <SwiperSlide>
          <img className="md:h-[70vh] object-cover" src={sliderImageOne} alt="slider-image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImageTwo} alt="slider-image2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
