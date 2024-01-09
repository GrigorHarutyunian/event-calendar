import React, { useEffect, useState } from "react";
import SelectComponent from "../../commonComponents/SelectComponent/SelectComponent";
import "./BirthdayDateComponent.css";
import { days, years, months } from "../../../data/constants";
export default function BirthdayDateComponent({ setBirthday }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  function toDate(month, day, year) {
    const d = new Date(`${month} ${day}, ${year}`);
    return d;
  }
  useEffect(() => {
    setBirthday(toDate(month, day, year));
  }, [day, month, year]);
  return (
    <div>
      <h3 className="birth-label">Birth data</h3>
      <div className="select-container">
        <SelectComponent
          arrayOfOptions={months}
          title="Months"
          option={month}
          setOption={setMonth}
        />
        <SelectComponent
          arrayOfOptions={days}
          title="Days"
          option={day}
          setOption={setDay}
        />
        <SelectComponent
          arrayOfOptions={years}
          title="Year"
          option={year}
          setOption={setYear}
        />
      </div>
    </div>
  );
}
