import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> 
    </>
  );
}

export default App;



// import { Outlet } from 'react-router-dom'
// import './App.css'
// import Navbar from "./components/navbar/Navbar"
// import Banner from './home/Banner'
// import Services from './home/Services'
// import HomeAbout from './home/HomeAbout'
// import CounterUp from './components/CounterUp'
// import NewUpdates from './components/NewUpdates'
// import Customer from './components/Customer'

// function App() {

//   return (
//     <>
//       <Navbar/>
//       <Banner />
//       <Services />
//       <HomeAbout/>
//       <CounterUp/>
//       <NewUpdates/>
//       <Customer/>
//       <Outlet />
//     </>
//   )
// }

// export default App
