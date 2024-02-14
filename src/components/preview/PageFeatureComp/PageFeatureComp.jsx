import React from "react";
import { features } from "../../../data/constants";
import "./PageFeatureComp.css";
import FeatureCard from "../FeatureCard/FeatureCard.jsx";
export default function PageFeatureComp() {
  return (
    <div className="pageFeatureComp-container">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  );
}
