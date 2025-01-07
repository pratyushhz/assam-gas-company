import AgclMission from "../sections/AgclMission";
import AgclVision from "../sections/AgclVision";
import Banner from "../sections/Banner"

const Vision = () => {

    const title ="Our Mission & Vision";
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
        label:"vision",
        path:"/vision"
        }

    ];
    const backgroundImage = "https://i0.wp.com/cgdindia.net/wp-content/uploads/2021/02/shutterstock_588495665-1-scaled.jpg?fit=2560%2C1707&ssl=1";
    return(
        <>
            <Banner title={title} breadcrumbs={breadcrumbs} backgroundImage={backgroundImage}/>
            <AgclVision 
                title="AGCL Vision"
                imageUrl="https://etimg.etb2bimg.com/thumb/79849661.cms?width=400&height=300"
                heading="Empowering Assam's Energy Future"
                description="To be a growth-oriented energy company dedicated to enhancing stakeholder value and customer delight through operational excellence and contributing towards a safe and clean eco-system."
                buttonText="Read More"
                buttonLink="#"
            />
            <AgclMission/>
        </>
    )
}

export default Vision