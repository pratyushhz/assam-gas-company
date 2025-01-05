// import Loader from "../../Loader"
import Banner from "../sections/Banner"
const WhoWeAre = () => {
  const title ="Who We Are";
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
  return (
    <>
        <Banner title={title} breadcrumbs={breadcrumbs} backgroundImage={backgroundImage}/>
    </>
  )
}

export default WhoWeAre;
