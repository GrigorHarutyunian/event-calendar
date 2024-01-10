import React, { useEffect, useState } from "react";
import SelectComponent from "../../commonComponents/SelectComponent/SelectComponent";
import "./BirthdayDateComponent.css";
import { days, years, months, toDate } from "../../../data/constants";
import { validateBirthdayDate } from "./../../../utils/birthdayDataValidation";

export default function BirthdayDateComponent({
  setBirthday,
  setIsNotValidBirthday,
}) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [monthIndex, setMonthIndex] = useState(null);
  const [year, setYear] = useState("");

  useEffect(() => {
    months.forEach((currenMonth, i) => {
      if (currenMonth === month) {
        setMonthIndex(i);
      }
    });
    if (validateBirthdayDate(year, monthIndex, day)) {
      setIsNotValidBirthday(false);
      setBirthday(toDate(monthIndex, day, year));
    } else {
      setIsNotValidBirthday(true);
    }
  }, [day, month, year, monthIndex, setBirthday, setIsNotValidBirthday]);

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
