import React from "react";
import GetStaredButton from "../GetStaredButton/GetStaredButton";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="CTA-container">
      <div className="CTA-description">
        <h2 className="CTA-first-title">Let's try our service now!</h2>
        <p className="CTA-paragaraf">
          Everything you need to acdept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="CTA-button-container">
        <GetStaredButton />
      </div>
    </section>
  );
}
