import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// import 'swiper/swiper-bundle.min.css';
import slides from '../utils/swiperSlides';
import swiperSliderBg from "../assets/new-images/about-us-img.jpg"

SwiperCore.use([Autoplay]);

const HomeNews = () => {
  return (
    <section className="banner-layout2 pt-60 pb-60">
      <div className="container">
        <div
          className="row mb-40"
          style={{ position: 'relative', zIndex: 10 }}
          data-aos="fade-up"
          data-aos-offset="0"
        >
          <div className="col-12">
            <h2
              className="heading__subtitle color-primary1 heading-badge mb-0"
              style={{ width: 'fit-content', color: '#fff' }}
            >
              News
            </h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <h3 className="heading__title color-white mt-20">AGCL in Action</h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <a
              href="javascript:void(0)"
              className="new-btn-style btn btn__primary btn__outlined btn__custom"
            >
              <i className="icon-arrow-right"></i>
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-img">
        <img src={swiperSliderBg} alt="background" />
      </div>
      <div className="container-fluid">
        <Swiper
          spaceBetween={30}
          slidesPerView={2.5}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 2.2,
            },
          }}
        >
          {slides.map((swiperslide, index) => (
            <SwiperSlide key={index}>
              <img src={swiperslide.img} alt={`Image ${index + 1}`} />
              <div className="slide-content">
                <h2>{swiperslide.title}</h2>
                <p>{swiperslide.description}</p>
                <a
                  href="javascript:void(0)"
                  className="btn btn__primary btn__primary-style2 mr-30 mt-4"
                >
                  <i className="icon-arrow-right"></i>
                  <span>View All</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeNews;
