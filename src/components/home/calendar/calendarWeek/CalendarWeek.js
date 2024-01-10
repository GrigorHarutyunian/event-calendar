import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { prevWeek, nexTWeek } from "../../../../redux/slices/currentDateSlice";
import { IconButton } from "@mui/material";
import { ChevronRightRounded } from "@mui/icons-material";
import { ChevronLeftRounded } from "@mui/icons-material";

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

const TimeGrid = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i); // Adjust as needed

  return (
    <div className="time-grid">
      {hours.map((hour) => (
        <div key={hour} className="time-grid-item">
          {hour}:00
        </div>
      ))}
    </div>
  );
};

export const CalendarWeek = ({ currentDate }) => {
  const dispatch = useDispatch();
  const event = useSelector((store) => store.events);
  const eventsArr = [...event.events];

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
        {weekDays.map((day, index) => (
          <div className="week-days-date" key={index}>
            <div key={day} className="week-day">
              {day}
            </div>
            <div style={{ height: "100%" }}>
              <div key={weekDaysList[index].getDate()} className="week-date">
                {weekDaysList[index].getDate()}
              </div>
              <TimeGrid />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
