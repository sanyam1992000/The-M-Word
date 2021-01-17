import React from "react";
import Button from "../button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Manan Writes</h1>

      <div className="hero-btns"></div>
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        Get Started
      </Button>
    </div>
  );
}

export default HeroSection;
