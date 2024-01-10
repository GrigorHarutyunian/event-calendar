import React, { useEffect, useState } from "react";
import SelectComponent from "../../commonComponents/SelectComponent/SelectComponent";
import "./BirthdayDateComponent.css";
import { days, years, months } from "../../../data/constants";
import { toDate } from "../../../utils";
import { validateBirthdayDate } from "./../../../utils/birthdayDataValidation";

export default function BirthdayDateComponent({
  setBirthday,
  setIsNotValidBirthday,
}) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [monthIndex, setMonthIndex] = useState(null);
  const [year, setYear] = useState("");
  const selects = [
    {
      arrayOfOptions: months,
      title: "Months",
      option: month,
      setOption: setMonth,
    },
    {
      arrayOfOptions: days,
      title: "Days",
      option: day,
      setOption: setDay,
    },
    {
      arrayOfOptions: years,
      title: "Years",
      option: year,
      setOption: setYear,
    },
  ];

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
        {selects.map((select) => (
          <SelectComponent
            arrayOfOptions={select.arrayOfOptions}
            title={select.title}
            option={select.option}
            setOption={select.setOption}
          />
        ))}
      </div>
    </div>
  );
}
