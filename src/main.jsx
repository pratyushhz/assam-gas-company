
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import "./assets/js/jquerySetUp.js";
import Home from "../src/home/Home.jsx"
import "../src/assets/css/style-6.css"
import WhoWeAre from './components/pages/who-we-are/WhoWeAre.jsx';
import Vision from "./components/pages/vision/Vision.jsx"
import Leadership from './components/pages/Leadership.jsx';

const router = createBrowserRouter([
  { path: "/", 
    element: <App />,
    children: [
      {
      path:"/",
      element:<Home />
      },
      {
        path:"whoweare",
        element:<WhoWeAre/>
      },

      {
        path:"vision",
        element:<Vision />
      },
      {
        path:"leadership",
        element:<Leadership />
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
