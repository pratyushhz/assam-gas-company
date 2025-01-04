import React from "react";
import customerServicesData from "../../utils/customerServicesData";

const CustomerServices = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-8 customer-services-hover">
      <h4 className="mb-30 mt-10" data-aos="fade-up" data-aos-offset="0">
        Customer Services
      </h4>
      <div className="row features-layout3">
        {customerServicesData.map((customerservice) => (
          <div className="col-sm-4" key={customerservice.id}>
            <div className="feature-item">
              <div className="feature__icon">
                <img src={customerservice.icon} alt={customerservice.title} />
              </div>
              <h4 className="feature__title">{customerservice.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerServices;
