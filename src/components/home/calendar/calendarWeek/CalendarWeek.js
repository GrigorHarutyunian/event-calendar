import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { prevWeek, nexTWeek } from "../../../../redux/slices/currentDateSlice";
import { IconButton } from "@mui/material";
import { ChevronRightRounded } from "@mui/icons-material";
import { ChevronLeftRounded } from "@mui/icons-material";
import { setDate } from "../../../../redux/slices/currentDateSlice";
import { selectedDay } from "../../../../redux/slices/selectedDaySlice";
import { getSelectedTime } from "../../../../redux/slices/selectedTimeSlice";
import { GetEvents } from "../../../../firebase/service/GetEvents";
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

const TimeGrid = ({ userID, date, selectedHours, setSelectedHours }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);
  const [dragging, setDragging] = useState(false);
  const dispatch = useDispatch();
  const handleMouseDown = (hour) => {
    setDragStart(hour);
    setDragEnd(hour);
    setDragging(true);
  };

  const handleMouseOver = (hour) => {
    if (dragging) {
      setDragEnd(hour);
    }
  };

  const handleMouseUp = () => {
    console.log(`Selected hours: ${dragStart} to ${dragEnd}`);
    console.log(`Selected day: ${date.getDate()}`);
    console.log(`Selected month: ${monthNames[date.getMonth()]}`);
    console.log(`Selected year: ${date.getFullYear()}`);
    dispatch(setDate(date.toDateString()));
    dispatch(selectedDay(date.toDateString()));
    dispatch(getSelectedTime({ start: dragStart, end: dragEnd }));
    setSelectedHours({ start: dragStart, end: dragEnd, date });
    GetEvents(dispatch, date.toDateString(), userID);
    setDragging(false);
  };

  return (
    <div className="time-grid">
      {hours.map((hour) => (
        <div
          key={hour}
          className={`time-grid-item ${
            selectedHours &&
            selectedHours.date.getDate() === date.getDate() &&
            selectedHours.start <= hour &&
            hour <= selectedHours.end
              ? "selected"
              : ""
          }`}
          onMouseDown={() => handleMouseDown(hour)}
          onMouseOver={() => handleMouseOver(hour)}
          onMouseUp={handleMouseUp}
        >
          {hour}:00
        </div>
      ))}
    </div>
  );
};

export const CalendarWeek = ({ userID, currentDate }) => {
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
  const [selectedHours, setSelectedHours] = useState(null);

  return (
    <div className="calendar week">
      <span className="span21">
        <header className="calendar-header">
          <IconButton
            onClick={() => dispatch(prevWeek())}
            aria-label="previous-week"
          >
            <ChevronLeftRounded />
          </IconButton>
          <h2>{monthNames[new Date(currentDate).getMonth()]}</h2>
          <IconButton
            onClick={() => dispatch(nexTWeek())}
            aria-label="next-week"
          >
            <ChevronRightRounded />
          </IconButton>
        </header>
        <div className="calendar-week-list">
          {weekDaysList.map((date, index) => (
            <div className="week-days-date" key={date + index}>
              <div key={date + "week-day" + index} className="week-day">
                {weekDays[date.getDay()]}
              </div>
              <div key={date + "week-date" + index} className="week-date">
                {date.getDate()}
              </div>
              <div style={{ height: "100%" }}>
                <TimeGrid
                  key={date + "time-grid" + index}
                  date={date}
                  selectedHours={selectedHours}
                  setSelectedHours={setSelectedHours}
                  userID={userID}
                />
              </div>
            </div>
          ))}
        </div>
      </span>
    </div>
  );
};
