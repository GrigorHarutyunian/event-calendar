import React from "react";
import "./FeatureCard.css";
export default function FeatureCard({ icon, title, content, index }) {
  return (
    <div className={`featureCard-container`}>
      <div className="image-busines-container">
        <img src={icon} alt="icon" className="busines-image-featureCard" />
      </div>
      <div className="busines-container-title-content">
        <h4 className="busines-title-featureCard">{title}</h4>
        <p className="busines-content-featureCard">{content}</p>
      </div>
    </div>
  );
}
