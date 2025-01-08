import React from 'react'
import Description from './sections/Description';
import TextBlock from './sections/TextBlock';
import Banner from './sections/Banner';
import Gallery from './sections/Gallery';
const CityGas = () => {

    const title ="City Gas Distribution";
  const breadcrumbs = [
    {
      label:"Home",
      path:"/"
    },
    {
      label:"About Us",
      path:"/whoweare"
    },
    {
      label:"Who We Are",
      path:"/whoweare"
    }

  ];
  const backgroundImage = "https://i0.wp.com/cgdindia.net/wp-content/uploads/2021/02/shutterstock_588495665-1-scaled.jpg?fit=2560%2C1707&ssl=1";
    // Description data
  const descriptionData = {
    title: "Overview",
    paragraphs: [
      "AGCL started its Transmission Business since 1967, vide Pipeline network in Upper Assam GA primarily to Fertilizer, Power & Petro-chemical Plants. AGCL received PNGRB authorization for common carrier Pipeline system on 20.12.2013",
      "AGCL started its Transmission Business since 1967, vide Pipeline network in Upper Assam GA primarily to Fertilizer, Power & Petro-chemical Plants. AGCL received PNGRB authorization for common carrier Pipeline system on 20.12.2013"
    ]
  };
    const data = {
        // "title": "City Gas Distribution (CGD)",
        // "overview": "City Gas Distribution (CGD) is a modern energy solution designed to provide cleaner, safer, and more efficient fuel options to urban and semi-urban areas.",
        "details": [
          {
            "title": "Piped Natural Gas (PNG)",
            "description": "Piped Natural Gas (PNG) is a core component of the CGD system, offering an eco-friendly, economical, and convenient alternative to traditional fuels like LPG, diesel, and coal."
          }
        ],
        "gallery": [
          "https://i0.wp.com/mahabahu.com/wp-content/uploads/2024/07/Gas-pipe-Line1.jpg",
          "https://profit.pakistantoday.com.pk/wp-content/uploads/2021/09/UK-Gas-Networks.jpg"
        ],
        "whyList": [
          "Eco-Friendly: Reduces greenhouse gas emissions and promotes cleaner air",
          "Convenience: Delivered through pipelines, ensuring a constant supply.",
          "Safety: Lighter than air, it disperses quickly in case of leaks.",
          "Cost-Efficient: Saves money for households, businesses, and industries in the long run."
        ],
        "whyList": [
            "Eco-Friendly: Reduces greenhouse gas emissions and promotes cleaner air",
            "Convenience: Delivered through pipelines, ensuring a constant supply.",
            "Safety: Lighter than air, it disperses quickly in case of leaks.",
            "Cost-Efficient: Saves money for households, businesses, and industries in the long run.",
        ],
      }
      
  
    return (
        <>
            <Banner title={title} breadcrumbs={breadcrumbs} backgroundImage={backgroundImage}/>
            <section class="text-content-section pt-0 pb-90">
                <div class="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <div className="pt-60 pb-60">
                                <Description title={descriptionData.title} paragraphs={descriptionData.paragraphs}/>
                            </div>
                            <Gallery images={data.gallery}/>
                            <TextBlock details={data.details} />
                            
                            <div className="row">
                                <div className="col-12">
                                <h6>Why PNG?</h6>
                                <ol>
                                    {data.whyList.map((item, index) => (
                                    <li key={index}>{item}</li>
                                    ))}
                                </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                        {/* <Sidebar /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
  };
  
  export default CityGas;
