import { useDispatch } from "react-redux";
import { nextMonth, prevMonth } from "../../../redux/slices/currentDateSlice";
import { IconButton } from "@mui/material";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

export const CalendarHeader = ({ currentDate, thisDay }) => {
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
  console.log(currentDate);
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();
  const dispatch = useDispatch();

  return (
    <header className="calendar-header">
      <IconButton
        onClick={() => dispatch(prevMonth(new Date(thisDay).getDate()))}
        aria-label="cart"
      >
        <ChevronLeftRounded />
      </IconButton>
      <h2>
        {currentMonth} {currentYear}
      </h2>
      <IconButton
        onClick={() => dispatch(nextMonth(new Date(thisDay).getDate()))}
        aria-label="cart"
      >
        <ChevronRightRounded />
      </IconButton>
    </header>
  );
};
