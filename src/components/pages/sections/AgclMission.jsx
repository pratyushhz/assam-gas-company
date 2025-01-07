import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const AgclMission = () => {
  const featureItems = [
    {
      imgSrc: "",
      altText: "icon",
      title: "Operational excellence",
      description: "Save money on utilities or increase the value of your home by installing solar"
    },
    {
      imgSrc: "",
      altText: "icon",
      title: "Strategic expansion",
      description: "Everyday the sun provides us with abundance of free energy by placing solar"
    },
    {
      imgSrc: "",
      altText: "icon",
      title: "Quality of services",
      description: "Our remote industrial solar systems are designed to reliably power our clients"
    },
    {
      imgSrc: "",
      altText: "icon",
      title: "Development of HR",
      description: "Our sales engineers on our staff have experience and can design any complete"
    },
    {
      imgSrc: "",
      altText: "icon",
      title: "Welfare of people",
      description: "Everyday the sun provides us with abundance of free energy by placing solar"
    }
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="agcl_mission features-layout1 pt-60 pb-40" style={{ background: '#f6f6f6' }}>
      {/* <div className="bg-img"><img src="assets/images/backgrounds/3.jpg" alt="background" /></div> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h5 className="title-left-border text__block-title">Our Mission</h5>
          </div>
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-12">
            <Slider {...settings} style={{ background: '#e9efe8', padding: '40px 0' }}>
              {featureItems.map((item, index) => (
                <div key={index} className="feature-item">
                  <div className="feature__icon">
                    <img src={item.imgSrc} alt={item.altText} />
                  </div>
                  <h4 className="feature__title">{item.title}</h4>
                  <p className="feature__desc">{item.description}</p>
                </div>
              ))}
            </Slider>
            {/* /.carousel */}
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}

export default AgclMission;
