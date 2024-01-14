import React from "react";
import "./HeroInfoComponent.css";
import GetStarted from "../GetStarted/GetStarted";

export default function HeroInfoComponent() {
  return (
    <div className="hero-info-container">
      <div className="hero-button-with-intro">
        <div className="hero-intro">
          <span className="hero-span-1">The Next</span>
          <br />
          <span className="hero-span-2">Generation</span>
        </div>
        <div className="hero-button-container">
          <GetStarted />
        </div>
      </div>
      <p className="hero-p">Event corditating</p>
      <div className="hero-span-container">
        <span className="hero-span-info">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs.We examine annual percentage rares,
          annual fees.
        </span>
      </div>
    </div>
  );
}
