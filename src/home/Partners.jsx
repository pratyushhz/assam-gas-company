import React from "react";
import Slider from "react-slick";
import partners from "../utils/partners"
const Partners = () => {
  const settings = {
    slidesToShow: 6,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="clients py-0 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              {partners.map((partner, index) => (
                <div className="client" key={index}>
                  <a href={partner.link}>
                    <img src={partner.img} alt={partner.alt} />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
