import React from "react";
import "./CalendarImage.css";
import { Calendar1, Calendar2 } from "../../../assets";
export default function CalendarImage() {
  return (
    <div className="calendar-image-container">
      <img
        src={Calendar1}
        alt="billing"
        className="calendar-image-calendarDeal"
      />
      <div className="blue-gradiant-background-calendarImage" />
    </div>
  );
}
