import React from "react";
import Hero from "./Hero/Hero";
import "./Preview.css";

export default function Preview() {
  return (
    <div className="">
      <div className="background-stars">
        <div className="bg"></div>
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>
      <div className="preview-container">
        <Hero />
      </div>
    </div>
  );
}
