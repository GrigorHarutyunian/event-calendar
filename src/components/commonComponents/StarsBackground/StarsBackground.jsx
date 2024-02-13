import React from "react";
import "./StarsBackground.css";
export default function StarsBackground() {
  return (
    <div>
      <div className="bg"></div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </div>
  );
}
