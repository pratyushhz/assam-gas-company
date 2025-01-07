import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Core styles
import "slick-carousel/slick/slick-theme.css"; // Optional theme

import sliderData from "../utils/sliderdata/SliderData";

const Banner = () => {
  const settings = {
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    speed: 700,
    fade: true,
    cssEase: "linear",
  };

  return (
    <section className="slider">
      <Slider {...settings}>
        {sliderData.map((slide) => (
          <div
            className="slide-item align-v-h bg-overlay bg-overlay-2"
            key={slide.id}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                  <div className="slide__body">
                    <span className="slide__subtitle">
                      <span className="heading-badge">{slide.badge}</span> {slide.subtitle}
                    </span>
                    <h2 className="slide__title">{slide.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
