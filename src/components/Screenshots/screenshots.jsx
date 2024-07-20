import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import screenshots from "../../data/screenshots.json"; // Importing the screenshots JSON

SwiperCore.use([Pagination]);

const Screenshots = () => {
  const paginationRef = React.useRef(null);

  return (
    <section id="screenshots" className="secreen-shots section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Screenshots
                <span className="right"></span>
              </h6>
              <h2>See Our Stunning Screenshots</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper-container">
              <Swiper
                speed={1000}
                spaceBetween={20}
                loop={true}
                slidesPerView={5}
                pagination={{
                  clickable: true,
                  el: paginationRef.current,
                }}
                className="swiper-wrapper"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  767: {
                    slidesPerView: 3,
                    centeredSlides: false,
                  },
                  991: {
                    slidesPerView: 5,
                  },
                }}
              >
                {screenshots.map((screenshot, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="item">
                      <div className="screenshot">
                        <img
                          src={screenshot}
                          alt={`Screenshot ${index + 1}`}
                          style={{ borderRadius: "15px", width: "100%", height: "auto" }} // Apply border-radius here
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination" ref={paginationRef}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
