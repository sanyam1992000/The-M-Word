import React from "react";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/hero/HeroSection";
import NavBar from "../../components/navbar/NavBar";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}
