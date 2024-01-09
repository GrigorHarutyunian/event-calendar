import React from "react";
import "./ImageComponent.css";

export default function ImageComponent({ image = "images/profile.png" }) {
  return (
    <div className="image-container">
      <img className="image" src={image} alt="User Image" />
    </div>
  );
}
