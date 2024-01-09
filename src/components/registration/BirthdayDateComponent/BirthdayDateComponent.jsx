import React from "react";
import SelectComponent from "../../commonComponents/SelectComponent/SelectComponent";
import "./BirthdayDateComponent.css";
import { days, years, months } from "../../../data/constants";
export default function BirthdayDateComponent() {
  return (
    <div>
      <h3 className="birth-label">Birth data</h3>
      <div className="select-container">
        <SelectComponent arrayOfOptions={months} title="Months" />
        <SelectComponent arrayOfOptions={days} title="Days" />
        <SelectComponent arrayOfOptions={years} title="Year" />
      </div>
    </div>
  );
}
