import React from "react";
import Hero from "./Hero/Hero";
import "./Preview.css";
import StarsBackground from "./../commonComponents/StarsBackground/StarsBackground.jsx";
export default function Preview() {
  return (
    <div className="">
      <div className="background-stars">
        <StarsBackground />
      </div>
      <div className="preview-container">
        <Hero />
      </div>
    </div>
  );
}
