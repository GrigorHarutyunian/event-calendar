import React from "react";
import GetStaredButton from "../GetStaredButton/GetStaredButton";
import "./BusinessInfoComp.css";
export default function BusinessInfoComp() {
  return (
    <div className="businessInfo-container">
      <div className="business-info-description">
        <h2 className="business-info-paragraf">
          You do the business,
          <br />
          we'll handle the schedule
        </h2>
        <div className="business-span-info">
          <span className="info">
            Efficiently organize your schedule with our intuitive calendar and
            events website. Seamlessly manage events, set reminders, and stay on
            track effortlessly. Simplify your life, one click at a time.
          </span>
        </div>
      </div>
      <div className="business-button-container">
        <GetStaredButton />
      </div>
    </div>
  );
}
