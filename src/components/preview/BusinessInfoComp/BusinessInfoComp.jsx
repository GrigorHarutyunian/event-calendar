import React from "react";
import { GetStaredButton } from "../index";
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
        <div className="business-span-info-container">
          <span className="business-span-info">
            Introducing our new calendar website, designed to revolutionize your
            scheduling experience. Effortlessly regulate your schedule, add
            events, and receive email reminders: all in one place. Stay
            organized, stay ahead.
          </span>
        </div>
      </div>
      <div className="business-button-container">
        <GetStaredButton />
      </div>
    </div>
  );
}
