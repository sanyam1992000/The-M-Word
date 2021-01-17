import React from "react";
import HeroSection from "../../components/hero/HeroSection";
import NavBar from "../../components/navbar/NavBar";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
    </div>
  );
}
