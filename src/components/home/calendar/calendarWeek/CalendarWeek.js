import { useDispatch, useSelector } from "react-redux";
import { prevWeek, nexTWeek } from "../../../../redux/slices/currentDateSlice";
import { IconButton } from "@mui/material";
import { ChevronRightRounded } from "@mui/icons-material";
import { ChevronLeftRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
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
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const CalendarWeek = ({ currentDate }) => {
  const dispatch = useDispatch();
  function generateWeeklyDays(startDate) {
    const daysOfWeek = [];
    const currentDay = new Date(startDate).getDay();
    let countPlus = startDate.getDate();
    let countMinus = startDate.getDate();
    let a = currentDay;

    daysOfWeek.push(
      new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
      )
    );

    while (a < 7) {
      countPlus++;
      if (a === 0) {
        break;
      }

      daysOfWeek.push(
        new Date(startDate.getFullYear(), startDate.getMonth(), countPlus)
      );

      a++;
    }

    while (daysOfWeek.length < 7) {
      countMinus--;
      daysOfWeek.unshift(
        new Date(startDate.getFullYear(), startDate.getMonth(), countMinus)
      );
    }
    return daysOfWeek;
  }

  const weekDaysList = generateWeeklyDays(currentDate);
  return (
    <div className="calendar week">
      <header className="calendar-header">
        <IconButton
          onClick={() => dispatch(prevWeek())}
          aria-label="previous-week"
        >
          <ChevronLeftRounded />
        </IconButton>
        <h2>{monthNames[new Date(currentDate).getMonth()]}</h2>
        <IconButton onClick={() => dispatch(nexTWeek())} aria-label="next-week">
          <ChevronRightRounded />
        </IconButton>
      </header>
      <div className="calendar-week-list">
        <div className="hours-list">
          {Array.from({ length: 24 }).map((_, hour) => (
            <div key={hour} className="hour">
              {hour === 0
                ? "12 AM"
                : hour === 12
                ? "12 PM"
                : hour > 12
                ? `${hour - 12} PM`
                : `${hour} AM`}
            </div>
          ))}
        </div>
        {weekDays.map((day, index) => (
          <div key={Date.now()} className="week-days-date">
            <div className="week-day">{day}</div>
            <div style={{ height: "100%" }}>
              <div className="week-date">{weekDaysList[index].getDate()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
