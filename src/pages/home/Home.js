import React from "react";
import Base from "../../components/Base/Base";
import Cards from "../../components/cards/Cards";
import HeroSection from "../../components/hero/HeroSection";
import "./Home.css";

function Home() {
  return (
    <Base>
      <HeroSection />
      <Cards />
    </Base>
  );
}

export default Home;
