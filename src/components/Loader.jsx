import LoaderImg from "../assets/new-images/logo/Fw_ Company Logo/LOGO.png"
// import "../assets/js/main"
const Loader = () => {
  return (
    <div className="preloader">
      <div className="loading">
        <img
          src={LoaderImg}
          alt="Loading..."
        />
      </div>
    </div>
  );
};

export default Loader;
