import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './componets/layout/RootLayout.jsx';
import Profile from './pages/Profile.jsx';
import Cart from './pages/Cart.jsx';
import Shop from './pages/Shop.jsx';
import Order from './pages/Order.jsx';
import About from './pages/About.jsx';
import Signin from './pages/Signin.jsx';
import SignUp from './pages/SignUp.jsx';
import Contact from './pages/Contact.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Product from './pages/Product.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <App />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
