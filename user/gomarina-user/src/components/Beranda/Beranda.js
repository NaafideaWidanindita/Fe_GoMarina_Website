import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import GardenBeauty from "./GardenBeauty";
import Partners from "./Partners";
import Attractions from "./Attractions";
import Events from "./Events";

function Beranda() {
  return (
    <div>
      <Header />
      <MainContent />
      <GardenBeauty />
      <Partners />
      <Attractions />
      <Events />
      <Footer />
    </div>
  );
}

export default Beranda;
