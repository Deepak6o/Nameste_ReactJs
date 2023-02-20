import React from "react";
import ReactDOM from "react-dom";
// Default Import
import Header from "./components/Header.js";
//Named Import
import { Title } from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
import { IMG_CDN_URL } from "./config.js";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
