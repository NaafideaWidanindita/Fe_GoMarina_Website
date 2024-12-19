import React from "react";
import Header from "../components/Headeri/Header";
import Footer from "../components/Footeri/Footer";
import Landing from "../components/Beranda/Landing";
import Partners from "../components/Beranda/Partners";
import Attractions from "../components/Beranda/Attractions";
import Events from "../components/Beranda/Events";
import VisitSection from "../components/Beranda/VisitSection";
import Tutorial from "../components/Beranda/Tutorial";


const Home = () => (
  <main>
    <Header />
    <Landing />
    <Partners />
    <Attractions />
    <Events />
    <VisitSection />
    <Tutorial />
    <Footer />
  </main>
);

export default Home;
