import React from "react";
import Slider from "react-slick";
import servicesData from "../utils/srvicesData";
import { Link } from "react-router-dom";

const Services = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="features-layout4 py-0 banner-bottom-slider"
      style={{ position: "relative", zIndex: "10" }}
    >
      <div className="container">
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div className="feature-item" key={index}>
              <div className="services-img">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="banner-bottom-slider-content">
                <h4 className="feature__title">{service.title}</h4>
                <p className="feature__desc">{service.description}</p>
                <Link to={service.to} className="btn__link">
                  <i className="icon-arrow-right icon-filled"></i>
                  <span>Explore More</span>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
