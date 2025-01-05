import React, { useRef, useState } from "react";
import Slider from "react-slick";
import LegacyData from "../utils/LegacyData";

const Legacy = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Custom year navigation
  const handleYearClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  // Synchronize active year with the carousel
  const handleAfterChange = (currentSlide) => {
    setActiveSlide(currentSlide);
    scrollYearIntoView(currentSlide);
  };

  // Scroll timeline years into view
  const scrollYearIntoView = (activeIndex) => {
    const timelineYears = document.querySelector(".timeline-years");
    const activeYear = document.querySelectorAll(".timeline-years span")[activeIndex];
    if (activeYear) {
      const containerRect = timelineYears.getBoundingClientRect();
      const activeRect = activeYear.getBoundingClientRect();
      const offset = activeRect.left - containerRect.left - 20; // Adjust offset as needed
      timelineYears.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const settings = {
    infinite: false,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 1400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: handleAfterChange,
  };

  return (
    <section className="post-grid pb-60 pt-0 mt-0">
      <div className="container-fluid" style={{ paddingRight: 0, paddingLeft: 0 }}>
        {/* Timeline carousel */}
        <div className="timeline-carousel">
          <div
            className="row mb-40"
            style={{ position: "relative", zIndex: 10 }}
            data-aos="fade-up"
            data-aos-offset="0"
          >
            <div className="col-12">
              <h2
                className="heading__subtitle color-primary1 heading-badge mb-0"
                style={{ width: "fit-content", color: "#fff" }}
              >
                Legacy
              </h2>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7 mt-20">
              <h3 className="heading__title text-white">AGCL’s Remarkable Legacy</h3>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1">
              <a href="#" className="new-btn-style btn btn__primary btn__outlined btn__custom">
                <i className="icon-arrow-right"></i>
                <span>View All</span>
              </a>
            </div>
          </div>
          <div className="timeline-carousel__item-wrapper">
            <Slider ref={sliderRef} {...settings}>
              {LegacyData.map((item, index) => (
                <div className="timeline-carousel__item" key={index}>
                  <div className="timeline-carousel__image">
                    <div
                      className="media-wrapper media-wrapper--overlay"
                      style={{
                        background: `url('${item.img}') center center`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="timeline-carousel__item-inner">
                    <span className="year">{item.year}</span>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                    <a href="#" className="read-more">
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="timeline-container">
            <button
              className="timeline-scroll-left"
              onClick={() => document.querySelector(".timeline-years").scrollBy({ left: -100, behavior: "smooth" })}
            >
              &larr;
            </button>
            <div className="timeline-years">
              {LegacyData.map((item, index) => (
                <span
                  key={index}
                  className={activeSlide === index ? "active" : ""}
                  onClick={() => handleYearClick(index)}
                >
                  {item.year}
                </span>
              ))}
            </div>
            <button
              className="timeline-scroll-right"
              onClick={() => document.querySelector(".timeline-years").scrollBy({ left: 100, behavior: "smooth" })}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
