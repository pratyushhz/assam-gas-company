import React from "react";

const AgclVision = ({ title, imageUrl, heading, description, buttonText, buttonLink }) => {
  return (
    <section className="pt-60 who-we-are">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h5 className="title-left-border text__block-title">{title}</h5>
          </div>
        </div>
        <div className="row row-no-gutter mt-10">
          <div className="col-sm-12 col-md-12 col-lg-6 background-banner">
            <div className="bg-img">
              <img
                src={imageUrl}
                alt="banner"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="inner-padding bg-primary">
              <div className="heading-layout2 heading-light mb-20">
                <h3 className="heading__title">{heading}</h3>
                <p className="heading__desc">{description}</p>
              </div>
              <a href={buttonLink} className="btn btn__white btn__white-style2 mt-20">
                <i className="icon-arrow-right"></i>
                <span>{buttonText}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgclVision;
