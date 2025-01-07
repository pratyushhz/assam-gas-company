import React from "react";
import { Link } from "react-router-dom";
const Speakers = () => {
  const speakersData = [
    {
      imgSrc: "assets/profile/indra.jpg",
      name: "Shri Indra Gogoi",
      title: "Vice Chairman",
      profileLink: "#",
    },
    {
      imgSrc: "assets/profile/laksh1.png",
      name: "Dr. Lakshmanan S",
      title: "IAS",
      profileLink: "#",
    },
    {
      imgSrc: "assets/profile/Mayuri_Chetia.png",
      name: "Smt. Mayuri Chetia, ACS",
      title: "Nominee Director",
      profileLink: "#",
    },
    {
      imgSrc: "assets/profile/dhiren.png",
      name: "Shri Dhiren Handique",
      title: "Independent Director",
      profileLink: "#",
    },
  ];

  return (
    <section className="banner-layout4 py-0 speakers-section-three">
      <div className="container">
        <div className="row">
          {speakersData.map((speaker, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={speaker.imgSrc} alt={speaker.name} />
                </div>
                <div className="team-content">
                  <h3 className="name">{speaker.name}</h3>
                  <h4 className="title">{speaker.title}</h4>
                </div>
                <Link to={speaker.profileLink} className="btn__link">
                  <i className="icon-arrow-right icon-filled"></i>
                  <span>View Profile</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
