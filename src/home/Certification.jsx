// import React from "react";
import Slider from "react-slick";
import certificates from "../utils/certificates";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Certification = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="portfolio-layout2 certificate-main-container">
      <div className="container">
        <div
          className="row mb-40"
          style={{ position: "relative", zIndex: 10 }}
          data-aos="fade-up"
          data-aos-offset="0"
        >
          <div className="col-12">
            <span className="pre-title">Certifications</span>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7">
            <h3 className="heading__title" style={{ fontSize: "30px" }}>
              Certified for Excellence
            </h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1">
            <a href="#" className="btn btn__primary btn__outlined btn__custom">
              <i className="icon-arrow-right"></i>
              <span>View All</span>
            </a>
          </div>
        </div>

        <Slider {...settings}>
          {certificates.map((certificate, index) => (
            <div className="portfolio-item" key={certificate.id} style={{ width: "370px" }}>
              <div className="portfolio__img">
                <img src={certificate.img} alt={`Certificate ${index + 1}`} />
                <div className="steps">
                  <span>{index + 1}</span>
                </div>
              </div>
              <div className="portfolio__body_2">
                <h4 className="portfolio__title">
                  <a href="#">{certificate.title}</a>
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certification;
