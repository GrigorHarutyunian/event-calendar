import React from "react";
import Hero from "./Hero/Hero";
import "./Preview.css";
import StarsBackground from "./../commonComponents/StarsBackground/StarsBackground.jsx";
import Business from "./Business/Business";
export default function Preview() {
  return (
    <div className="">
      <div className="background-stars">
        <StarsBackground />
      </div>
      <div className="preview-container">
        <Hero />
        <Business />
      </div>
    </div>
  );
}
