import { Link } from "react-router-dom";
import AgclLogo from "../../assets/new-images/logo/Fw_ Company Logo/AGCL_Logo.png"
const Navbar = () => {
    return(
        <div>
      <header className="header header-layout1">
        <div className="header-topbar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between contact-container">
                  <ul className="contact__list d-flex flex-wrap align-items-center list-unstyled mb-0">
                  <li className="emergency-flex">
                    <div className="emergecy-scroll number-scroll">
                      <i className="icon-phone color-primary1"></i>
                      <span id="number-type" className="color-primary1">Emergency Number</span>
                    </div>
                    <Link to="#" id="number-display" className="color-primary1" style={{color:"floralwhite"}}>18003453431 /
                      9435038145</Link>
                  </li>
                  <li className="emergency-flex">
                    <div className="emergecy-scroll number-scroll" style={{width:"135px"}}>
                      <i className="icon-phone color-primary1"></i>
                      <span id="number-type" className="color-primary1">Customer Care</span>
                    </div>
                    <Link to="#" id="number-display" className="color-primary1" style={{color:"floralwhite"}} >18005471266</Link>
                  </li>
                  </ul>
                  <div className="d-flex align-items-center">
                    <ul className="igg-1 list-unstyled mb-0 mr-20">
                      <li
                        style={{
                          borderRight: "1px solid #fff",
                          paddingRight: "10px",
                        }}
                      >
                        <Link to="#">Screen Reader Access</Link>
                      </li>
                      <li
                        style={{
                          borderRight: "1px solid #fff",
                          paddingRight: "10px",
                        }}
                      >
                        <Link to="#">Skip to Main Content</Link>
                      </li>
                    </ul>
                    <div className="font-increase">
                      <button>
                        <Link to="#">A-</Link>
                      </button>
                      <button>
                        <Link to="#">A</Link>
                      </button>
                      <button>
                        <Link to="#">A+</Link>
                      </button>
                    </div>
                    <ul className="social-icons list-unstyled mt-0">
                      <li>
                        <Link to="#">
                          <i
                            className="fab fa-facebook-f"
                            style={{ background: "#1877F2", color: "#fff" }}
                          ></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fab fa-instagram"
                            style={{
                              background:
                                "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
                              color: "#fff",
                            }}
                          ></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i style={{ backgroundColor: "#fff" }}>
                            <img
                              src="data:image/png;base64,..."
                              alt="twitter"
                            />
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i style={{ backgroundColor: "#fff" }}>
                            <img
                              src="data:image/png;base64,..."
                              alt="youtube"
                            />
                          </i>
                        </Link>
                      </li>
                    </ul>
                    <div className="dropdown lang-dropdown">
                      <button
                        className="dropdown-toggle lang-dropdown-toggle"
                        id="langDropdown"
                        data-toggle="dropdown"
                      >
                        <img
                          src="data:image/png;base64,..."
                          alt="india"
                        />{" "}
                        <span>English</span>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="langDropdown"
                      >
                        <Link to="#" className="dropdown-item" >
                          <span>অসমীয়া</span>
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>हिंदी</span>
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>বাংলা</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg sticky-navbar">

          <div className="container-fluid" style={{paddingRight:"0"}}>
            <Link to="/" className="navbar-brand" href="index.html">
              <img src={AgclLogo} className="logo" alt="logo" style={{maxWidth:"240px"}} />
            </Link>
            <button className="navbar-toggler" type="button">
              <span className="menu-lines"><span></span></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavigation">
              <ul className="top-menu-bar">
                <li className="nav__item has-dropdown">
                  <Link to="#" className="nav__item-link">Knowledge Hub</Link>
                  <button className="dropdown-toggle" data-toggle="dropdown"></button>
                  <ul className="dropdown-menu">
                    <li className="nav__item"><Link to="#" className="nav__item-link">Benefits of Natural Gas</Link></li>
  
                    <li className="nav__item"><Link to="#" className="nav__item-link">Gas Safety Tips</Link>
                    </li>
                    <li className="nav__item"><Link to="#" className="nav__item-link">Energy Calculators</Link></li>
                    <li className="nav__item"><Link to="#" className="nav__item-link">Safety Precautions</Link></li>
                  </ul>
                </li>
                <li className="nav__item has-dropdown">
                  <Link to="#" className="nav__item-link">CSR Initiatives</Link>
                  <button className="dropdown-toggle" data-toggle="dropdown"></button>
                  <ul className="dropdown-menu">
                    <li className="nav__item"><Link to="#" className="nav__item-link">Our CSR Projects</Link></li>
  
                    <li className="nav__item"><Link to="#" className="nav__item-link">CSR Annual Reports</Link>
                    </li>
                    <li className="nav__item"><Link to="#" className="nav__item-link">CSR Policies</Link></li>
                  </ul>
                </li>
                <li className="nav__item has-dropdown">
                  <Link to="#" className="nav__item-link">Governance</Link>
                  <button className="dropdown-toggle" data-toggle="dropdown"></button>
                  <ul className="dropdown-menu">
                    <li className="nav__item"><Link to="#" className="nav__item-link">Policies and Guidelines</Link></li>
  
                    <li className="nav__item"><Link to="#" className="nav__item-link">Acts, Rules and Regulations</Link>
                    </li>
                    <li className="nav__item"><Link to="#" className="nav__item-link">Code of Conduct</Link></li>
                    <li className="nav__item"><Link to="#" className="nav__item-link">Citizen Charter</Link></li>
                    <li className="nav__item"><Link to="#" className="nav__item-link">Certifications</Link></li>
                  </ul>
                </li>
                <li className="nav__item has-dropdown">
                  <Link to="#" className="nav__item-link">Media Center</Link>
                  <button className="dropdown-toggle" data-toggle="dropdown"></button>
                  <ul className="dropdown-menu">
                    <li className="nav__item"><Link to="#" className="nav__item-link">Corporate Brochure</Link></li>
  
                    <li className="nav__item"><Link to="#" className="nav__item-link">Press Releases</Link>
                    </li>
                    <li className="nav__item"><Link to="#" className="nav__item-link">News and Events</Link></li>
                    <li className="nav__item"><Link to="#" className="nav__item-link">Photo Gallery</Link></li>
                    <li className="nav__item"><Link to="#" className="nav__item-link">Video Library</Link></li>
                    <li className="nav__item"><Link to="#" className="nav__item-link">AGCL Logo</Link></li>
                  </ul>
                </li>
                
              </ul>
              <ul className="navbar-nav">
                <li className="nav__item has-dropdown">
                  <Link to="#" className="nav__item-link active">About Us</Link>
                  <button className="dropdown-toggle" data-toggle="dropdown"></button>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <Link to="/whoweare" className="nav__item-link">Who we are</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="/vision" className="nav__item-link">Vision</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="/leadership" className="nav__item-link">Our Leadership</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="#" className="nav__item-link">MD's Message</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="#" className="nav__item-link">Organization Structure</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="#" className="nav__item-link">Joint Ventures</Link>
                  </li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <Link to="#" className="nav__item-link">Safety First</Link>
                <button className="dropdown-toggle" data-toggle="dropdown"></button>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <Link to="#" className="nav__item-link">Emergency Helpline</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="#" className="nav__item-link">Safety Policies</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="#" className="nav__item-link">Our Safety & Sustainibility Approach</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="#" className="nav__item-link">Gas Safety Guidlines</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="#" className="nav__item-link">Call Before You Dig </Link>
                  </li>
                  
                  <li className="nav__item">
                    <Link to="#" className="nav__item-link">Safety Awareness</Link>
                  </li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <Link to="#" className="nav__item-link">Investors</Link>
                <button className="dropdown-toggle" data-toggle="dropdown"></button>
                <ul className="dropdown-menu">
                  <li className="nav__item"><Link to="#" className="nav__item-link">Financial Results</Link></li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <Link to="#" className="nav__item-link">Vendors</Link>
                <button className="dropdown-toggle" data-toggle="dropdown"></button>
                <ul className="dropdown-menu">
                  <li className="nav__item"><Link to="#" className="nav__item-link">Current Tenders</Link></li>

                  <li className="nav__item"><Link to="#" className="nav__item-link">Expression of Interest(EOI)</Link>
                  </li>
                  <li className="nav__item"><Link to="#" className="nav__item-link">Tenders Portal</Link></li>
                  <li className="nav__item"><Link to="#" className="nav__item-link">Vendor Policies</Link></li>
                  <li className="nav__item"><Link to="#" className="nav__item-link">Tender Documents</Link></li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <Link to="#" className="nav__item-link">Customer Zone</Link>
                <button className="dropdown-toggle" data-toggle="dropdown"></button>
                <ul className="dropdown-menu">
                  <li className="nav__item"><Link to="#" className="nav__item-link">Domestic Gas Services</Link></li>

                  <li className="nav__item"><Link to="#" className="nav__item-link">Commercial Gas Services</Link>
                  </li>
                  <li className="nav__item"><Link to="#" className="nav__item-link">Industrial Gas Services</Link></li>
                  <li className="nav__item"><Link to="#" className="nav__item-link">Retail Fuel: MS, HSD & CNG</Link></li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <Link to="#" className="nav__item-link">Career At AGCL</Link>
                <button className="dropdown-toggle" data-toggle="dropdown"></button>
                <ul className="dropdown-menu">
                  <li className="nav__item"><Link to="#" className="nav__item-link">Work With Us</Link></li>

                  <li className="nav__item"><Link to="#" className="nav__item-link">Current Job Openings</Link>
                  </li>
                  <li className="nav__item"><Link to="#" className="nav__item-link">Job Results</Link></li>
                  <li className="nav__item"><Link to="#" className="nav__item-link">Internship Opportunities</Link></li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <Link to="#" className="nav__item-link">Get In Touch</Link>
                <button className="dropdown-toggle" data-toggle="dropdown"></button>
                <ul className="dropdown-menu">
                  <li className="nav__item"><Link to="#" className="nav__item-link">Customer Care Numbers</Link></li>

                  <li className="nav__item"><Link to="#" className="nav__item-link">Our Offices</Link>
                  </li>
                  <li className="nav__item"><Link to="#" className="nav__item-link">FAQ & Feedback</Link></li>
                </ul>
              </li>
              
              
            </ul>
            {/* <button className="close-mobile-menu d-block d-lg-none"><i className="fas fa-times"></i></button> */}
          </div>
          
          
        </div>
      </nav>
      </header>
    </div>
    )
}

export default Navbar;