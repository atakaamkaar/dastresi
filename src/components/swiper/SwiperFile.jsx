import React, { useRef, useState } from "react";    
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperImage1 from "../../assets/imgs/swiper1.png";
import SwiperImage2 from "../../assets/imgs/swiper2.png";
import SwiperImage3 from "../../assets/imgs/swiper3.png";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperFile = () => {
  modules: [Navigation, Pagination, Autoplay];
  return (
    <div className="wrapper  w-full max-w-[1214px] mx-auto aspect-3/1">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-[400px] mt-[30px]"
        >
          <SwiperSlide>
            <a href="#">
              <img
                src={SwiperImage1}
                alt="Slide 3"
                className="w-full  h-auto object-cover rounded-[30px]"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <img
                src={SwiperImage2}
                alt="Slide 3"
                className="w-full  h-auto object-cover rounded-[30px]"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <img
                src={SwiperImage3}
                alt="Slide 3"
                className="w-full  h-auto object-cover rounded-[30px]"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default SwiperFile;
