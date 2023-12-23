import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pagenotfound from './components/Pagenotfound';
import Restuerenttems from './components/Restuerenttems.jsx';
import Restuarentdetails from './components/Restuarentdetails';
import Fooditems from './components/Fooditems';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn'
import ForgetPassword from './components/ForgetPassword';


const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Pagenotfound />,
    children: [
      {
        path: "/",
        element: <Restuerenttems />
      },

      {
        path: "/signin",
        element: <SignIn />
      },
      
      {
        path: "/login",
        element: <LogIn />
      },
    
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },

      {
        path: "/card",
        element: <Fooditems />
      },
      {
        path: "/restuarent/:id",
        element: <Restuarentdetails />
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouting} />);


