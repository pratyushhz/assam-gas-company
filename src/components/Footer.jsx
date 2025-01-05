import React from "react";

const Footer = () => {
  // Example: Dynamic visitor count (replace with API data if needed)
  const visitorCount = 1234;

  return (
    <footer className="footer">
      <div className="footer-primary">
        <div className="container">
          <div className="row">
            {/* Company Section */}
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
              <h6 className="footer-widget-title">Company</h6>
              <div className="footer-widget-content">
                <nav>
                  <ul className="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Corporate Governance</a></li>
                    <li><a href="#">CSR</a></li>
                    <li><a href="#">Customer Login</a></li>
                    <li><a href="#">Tenders</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">News & Events</a></li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Business Section */}
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
              <h6 className="footer-widget-title">Business</h6>
              <div className="footer-widget-content">
                <nav>
                  <ul className="list-unstyled">
                    <li><a href="#">Residential PNG</a></li>
                    <li><a href="#">Commercial PNG</a></li>
                    <li><a href="#">Industrial PNG</a></li>
                    <li><a href="#">CNG</a></li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Health & Safety Section */}
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
              <h6 className="footer-widget-title">Health & Safety</h6>
              <div className="footer-widget-content">
                <nav>
                  <ul className="list-unstyled">
                    <li><a href="#">Safety Guidelines for PNG</a></li>
                    <li><a href="#">What to do if you smell natural gas</a></li>
                    <li><a href="#">Call before dig</a></li>
                    <li><a href="#">Employee Corner</a></li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Quick Contact Section */}
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-contact">
              <h6 className="footer-widget-title">Quick Contact</h6>
              <div className="footer-widget-content">
                <p className="mb-20">If you have any questions or need help, feel free to contact our team.</p>
                <div className="contact__number d-flex align-items-center mb-30">
                  <i className="icon-phone"></i>
                  <a href="tel:18005471266" className="color-primary">18005471266</a>
                </div>
                <p className="mb-20">Guwahati, Assam</p>
                <a href="#" className="btn__location">
                  <i className="icon-location"></i>
                  <span>Get Directions</span>
                </a>
              </div>
              <ul className="social-icons list-unstyled mt-2">
                <li><a href="#"><i className="fab fa-facebook-f" style={{ background: "#1877F2", color: "#fff" }}></i></a></li>
                <li><a href="#"><i className="fab fa-instagram" style={{ background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)", color: "#fff" }}></i></a></li>
                <li><a href="#"><i style={{ backgroundColor: "#fff" }}><img src="twitter-icon-url" alt="Twitter" /></i></a></li>
                <li><a href="#"><i style={{ backgroundColor: "#fff" }}><img src="youtube-icon-url" alt="YouTube" /></i></a></li>
              </ul>
            </div>

            {/* Map Section */}
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-align-right">
              <h6 className="footer-widget-title">
                <a href="#" className="btn__location">
                  <i className="icon-location"></i>
                  <span>Get Directions</span>
                </a>
              </h6>
              <div className="footer-widget-content">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
                  height="230"
                  style={{ border: 0, maxWidth: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="latest-update text-center">
            <p className="text-white mb-2">Last Updated: 26 December, 2024 - 11:10 AM</p>
            <h4 className="color-white" style={{ fontSize: "16px", fontWeight: 500 }}>Visitors: {visitorCount}</h4>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyrights">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
              <nav>
                <ul className="copyright__nav d-flex flex-wrap list-unstyled mb-0">
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </nav>
              <p className="mb-0">
                <span className="color-gray">&copy; 2024 AGCL, All Rights Reserved.</span>
                <a href="#" style={{ color: "#fff" }}>Web.com(India) Pvt Ltd</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
