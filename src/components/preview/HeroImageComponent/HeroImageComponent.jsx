import React from "react";
import "./HeroImageComponent.css";
import { Picture3ForPreview } from "../../../assets/";

export default function HeroImageComponent() {
  return (
    <div className="heroImage-container">
      <div className="hero-image-container">
        <img className="hero-img" src={Picture3ForPreview} alt="Preview" />
        <div className="hero-img-bg" />
      </div>
    </div>
  );
}
