import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
import About from "./components/About.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestaunrantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/Profile.js";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />, // parentpath/{Path} => localhost:1244/about
        children: [
          {
            path: "profile", //  ParentPath/{path} => localhost:1244/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaunrantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
