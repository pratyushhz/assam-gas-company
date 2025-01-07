import React from "react";
import { Link } from "react-router-dom";
const Verticals = () => {
  const verticals = [
    {
      name: "Gas Transmission",
      image:
        "https://thumbs.dreamstime.com/b/gas-transmission-pipeline-18100835.jpg",
      altText: "Gas Transmission",
      category: "Vertical",
      detailsLink: "",
    },
    {
      name: "City Gas Distribution (CGD)",
      image:
        "https://i0.wp.com/cgdindia.net/wp-content/uploads/2023/10/PNG-3.jpg?fit=626%2C470&ssl=1",
      altText: "PNG",
      category: "Vertical",
      detailsLink: "",
    },
    {
      name: "Retail Fuel Outlet",
      image:
        "https://www.ey.com/content/dam/ey-unified-site/ey-com/en-sg/insights/energy-resources/images/ey-how-fuel-retail-companies-can-win-customers-of-the-future-meta.jpg",
      altText: "Retail Fuel Outlet",
      category: "Vertical",
      detailsLink: "",
    },
    {
      name: "Renewable Energy",
      image:
        "https://www.greenmountainenergy.com/content/dam/gme/web/en/multimedia/images/renewable-wind-energy-and-power/renewable-energy101-mobile.png",
      altText: "Renewable Energy",
      category: "Vertical",
      detailsLink: "",
    },
  ];

  return (
    <section className="post-grid pt-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading-layout2 mb-40">
              <h5 className="title-left-border text__block-title">
                Our Verticals
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          {verticals.map((vertical, index) => (
            <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
              <Link to={vertical.detailsLink}>
                <div className={`single__install`}>
                  <div className="install__bg__image">
                    <img src={vertical.image} alt={vertical.altText} />
                  </div>
                  <div className="single__install--content">
                    <div className="install__meta">
                      <span>{vertical.category}</span>
                      <h5>{vertical.name}</h5>
                      <span className="read-more-btn">
                        Read More <i className="icon-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
