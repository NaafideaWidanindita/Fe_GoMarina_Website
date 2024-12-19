import React from "react";
import Header from "../components/Headeri/Header";
import Footer from "../components/Footeri/Footer";
import AboutUsHeader from "../components/TentangKami/AboutUsHeader";
import PhotoGallery from "../components/TentangKami/PhotoGallery";
import GardenInfo from "../components/TentangKami/GardenInfo";
import LocationInfo from "../components/TentangKami/LocationInfo";
import ContactInfo from "../components/TentangKami/ContactInfo";
import VisionMission from "../components/TentangKami/VisionMission";
import TKSlogan from "../components/TentangKami/TKSlogan";
import ManagementTeam from "../components/TentangKami/ManagementTeam";


function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => alert("Teks berhasil disalin ke clipboard!"))
    .catch((err) => console.error("Gagal menyalin teks: ", err));
}

const About = () => {
  return (
    <main>
      <Header />
      <section className="about-us">
        <AboutUsHeader />
        <PhotoGallery />
        <GardenInfo />
        <LocationInfo copyToClipboard={copyToClipboard} />
        <ContactInfo copyToClipboard={copyToClipboard} />
        <VisionMission />
        <TKSlogan />
        <ManagementTeam />
      </section>
      <Footer />
    </main>
  );
};

export default About;
