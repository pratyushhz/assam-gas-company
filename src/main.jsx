
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Home from "../src/home/Home.jsx"
import "../src/assets/css/style-6.css"
import WhoWeAre from './who-we-are/WhoWeAre.jsx';


const router = createBrowserRouter([
  { path: "/", 
    element: <App />,
    children: [
      {
      path:"/",
      element:<Home />
      },
      {
        path:"who-we-are",
        element:<WhoWeAre/>
      }
    ]
    
  },
  // { path: "/home", 
  //   element: <Home /> 
  // },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
