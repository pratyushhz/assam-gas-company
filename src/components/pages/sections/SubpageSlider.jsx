import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const SubpageSlider = () => {
  const images = [
    "https://pbs.twimg.com/media/E-McNcUUYAQ2Ch2.jpg",
    "https://i0.wp.com/mahabahu.com/wp-content/uploads/2024/04/AGCL.jpg",
    "https://madhyamamonline.com/h-upload/2023/04/30/1500x900_1973307-4.webp",
    "https://assamgas.org/images/news/mou-jul-2019/3_b.jpg",
    "https://pbs.twimg.com/media/GRZTQQ_W0AA7dcy.jpg",
    "https://i0.wp.com/nenow.in/wp-content/uploads/2019/08/17-08-19-Dibrugarh-cm-inaugurating-a-CNG-Station-2.jpg?fit=1030%2C574&quality=89&ssl=1"
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-0">
      <div className="container-fluid who-we-are">
        <div className="row">
          <div className="col-12">
            <Slider {...settings} className="carousel-arrows-light">
              {images.map((image, index) => (
                <a
                  key={index}
                  className="popup-gallery-item"
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image} alt={`gallery img ${index + 1}`} />
                </a>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubpageSlider;
