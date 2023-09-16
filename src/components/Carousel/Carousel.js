import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Slider1, Slider2, Slider3, Slider4 } from "../../assets";

const Carousel = () => {
  return (
    <div className="carouselOverlay">
      <div className="carouselContainer">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          
          <SwiperSlide
            style={{
              backgroundImage: `url(${Slider1})`,
              backgroundRepeat: "no-repeat",
            }}
          >

            
            
             
            
            {/* <h1>Events</h1> */}
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${Slider2})` }}>
            
            {/* <h1>Exhibitions</h1> */}
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${Slider3})` }}>
          
            {/* <h1>Conferences</h1> */}
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${Slider4})` }}>
          
            {/* <h1>Accomodations</h1> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
