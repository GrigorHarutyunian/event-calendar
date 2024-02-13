import React from "react";
import BusinessInfoComp from "../BusinessInfoComp/BusinessInfoComp";
import PageFeatureComp from "../PageFeatureComp/PageFeatureComp";
import "./Business.css";

export default function Business() {
  return (
    <div className="business-container">
      <BusinessInfoComp />
      <PageFeatureComp />
    </div>
  );
}
