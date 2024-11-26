import React from "react";

import Landing from "../components/Beranda/Landing";
import Partners from "../components/Beranda/Partners";
import Attractions from "../components/Beranda/Attractions";
import Events from "../components/Beranda/Events";
import VisitSection from "../components/Beranda/VisitSection";
import Tutorial from "../components/Beranda/Tutorial";

const Home = () => (
  <main>
    <Landing />
    <Partners />
    <Attractions />
    <Events />
    <VisitSection />
    <Tutorial />
  </main>
);

export default Home;