import React from "react"; // Make sure to import React
import "../Calendar.css";
import "./CalendarYear.css";
import { IconButton } from "@mui/material";
import { CalendarTable } from "../CalendarTable.js";
import { ChevronRightRounded } from "@mui/icons-material";
import { ChevronLeftRounded } from "@mui/icons-material";

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
const dat = new Date();

export const CalendarYear = () => {
  return (
    <div className="calendar year">
      <header className="calendar-header">
        <IconButton aria-label="cart">
          <ChevronLeftRounded />
        </IconButton>
        <h2>2024</h2>
        <IconButton aria-label="cart">
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
        }}
      >
        {arr.map((v, i) => (
          <div key={i} className="calendar-years">
            <p>
              {
                monthNames[
                  new Date(dat.getFullYear(), dat.getMonth() + i, 1).getMonth()
                ]
              }
            </p>
            <CalendarTable
              currentDate={new Date(dat.getFullYear(), dat.getMonth() + i, 1)}
            />
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
