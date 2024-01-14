import React from "react";
import "./Hero.css";
import HeroInfoComponent from "../HeroInfoComponent/HeroInfoComponent";
import HeroImageComponent from "../HeroImageComponent/HeroImageComponent";

export default function Hero() {
  return (
    <div className="hero-container">
      <HeroInfoComponent />
      <HeroImageComponent />
    </div>
  );
}
