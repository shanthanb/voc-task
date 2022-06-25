import React from "react";
import Footer from "./containers/Footer";
import Media from "./containers/Media";
import MobilePage from "./containers/MobilePage";
import NavBar from "./containers/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Media />
      <MobilePage />
      <Footer />
    </div>
  );
};

export default Main;
