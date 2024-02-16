import React from "react";
import "../Calendar.css";
import "./CalendarYear.css";
import { IconButton } from "@mui/material";
import { CalendarTable } from "../CalendarTable.js";
import { ChevronRightRounded } from "@mui/icons-material";
import { ChevronLeftRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  nextYear,
  prevYear,
} from "../../../../redux/slices/currentDateSlice.js";
import { useSelector } from "react-redux";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const CalendarYear = ({ currentDate, thisDay, userID }) => {
  const dispatch = useDispatch();
  console.log(
    "🚀 ~ file: CalendarYear.js:42 ~ CalendarYear ~ thisDay:",
    thisDay
  );
  return (
    <div className="calendar year">
      <span className="span2">
        <header className="calendar-header">
          <IconButton
            onClick={() => {
              dispatch(prevYear());
            }}
            aria-label="cart"
          >
            <ChevronLeftRounded />
          </IconButton>
          <h2>{currentDate.getFullYear()}</h2>
          <IconButton
            onClick={() => {
              dispatch(nextYear());
            }}
          >
            <ChevronRightRounded />
          </IconButton>
        </header>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "space-between",
            overflow: "auto",
          }}
        >
          {arr.map((v, i) => (
            <div
              key={i}
              className={`calendar-years ${i >= 10 ? "center-month" : ""}`}
            >
              <p>
                {
                  monthNames[
                    new Date(currentDate.getFullYear(), i, 1).getMonth()
                  ]
                }
              </p>
              <CalendarTable
                userID={userID}
                currentDate={new Date(currentDate.getFullYear(), i, 1)}
              />
            </div>
          ))}
        </div>
      </span>
    </div>
  );
};
