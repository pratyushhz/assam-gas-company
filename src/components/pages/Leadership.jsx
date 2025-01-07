import React from 'react';
import AgclVision from './sections/AgclVision';
import Description from './sections/Description';
import Banner from './sections/Banner';
import Speakers from './sections/Speakers';

const Leadership = () => {
    // Banner content
    const title ="Our Leadership";
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
            label:"Leadership",
            path:"/leadership"
        }

    ];
    const backgroundImage = "https://i0.wp.com/cgdindia.net/wp-content/uploads/2021/02/shutterstock_588495665-1-scaled.jpg?fit=2560%2C1707&ssl=1";

    // Description Data
  const data = {
    title: "Overview",
    paragraphs: [
      "Assam Gas Company Ltd., a Govt. of Assam Undertaking was incorporated on March 31, 1962 in Shillong as a limited company wholly owned by the Government of Assam to carry out all kinds of business related to natural gas in India.",
      "The first gas transportation business started in the year 1967 with supply of natural gas to Namrup Thermal Power Station of ASEB. Subsequently, the company grew from strength to strength and stands today as one of the premier natural gas distribution companies in India."
    ]
  };

  return (
    <>
      <Banner title={title} breadcrumbs={breadcrumbs} backgroundImage={backgroundImage}/>
      <div className='pt-60 pb-0'>
        <Description title={data.title} paragraphs={data.paragraphs} />
      </div>
      <div className='pt-0'>
        <AgclVision 
            title="Board of Directors"
            imageUrl="https://pbs.twimg.com/media/GavC57NWAAAbzsl.jpg:large"
            heading="Shri Gokul Chandra Swargiyari"
            para="Managing Director"
            description="Shri Gokul Chandra Swargiyari was appointed as Nominee Director and Managing Director of the Company w.e.f. 2nd September, 2019 as per the provisions of Section 161(3) of the Companies Act, 2013 in pursuance of his appointment by Government of Assam Notification dated 22/08/2019."
            buttonText="Read More"
            buttonLink="#"
        />
    </div>
    <Speakers/>
    </>
  );
};

export default Leadership;
