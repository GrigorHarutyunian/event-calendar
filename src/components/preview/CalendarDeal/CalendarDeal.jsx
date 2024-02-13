import React from "react";
import CalendarImage from "../CalendarImage/CalendarImage";
import CalendarInfo from "../CalendarInfo/CalendarInfo";
import "./CalendarDeal.css";
export default function CalendarDeal() {
  return (
    <div className="calendar-deal-container">
      <CalendarImage />
      <CalendarInfo />
    </div>
  );
}
