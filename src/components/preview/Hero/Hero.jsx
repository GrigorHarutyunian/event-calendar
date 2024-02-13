import React from "react";
import "./Hero.css";
import HeroInfoComponent from "../HeroInfoComponent/HeroInfoComponent";
import HeroImageComponent from "../HeroImageComponent/HeroImageComponent";
import Earth from "../Earth/Earth";

export default function Hero() {
  return (
    <div className="hero-container">
      <HeroInfoComponent />
      <HeroImageComponent />
    </div>
  );
}
