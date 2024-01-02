import "./EventsDay.css";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeState } from "../../../../redux/slices/modalAddEventSlice";
export const EventsDay = () => {
  const dispatch = useDispatch();
  const selectedDayString = useSelector((store) => store.selectedDay);
  const selectedDay = new Date(selectedDayString);
  const WeeksDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
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
  const selectedDayInWeek = WeeksDay[selectedDay.getDay()];
  const day = selectedDay.getDate();
  const month = selectedDay.getMonth();
  const year = selectedDay.getFullYear();
  return (
    <div className="events-day">
      <header className="events-day-header">
        <h2>{selectedDayInWeek}</h2>
        <h4>
          {day} {months[month]} {year}
        </h4>
      </header>
      <Fab
        onClick={() => dispatch(changeState(true))}
        style={{ position: "absolute", bottom: "0", right: "0" }}
        color="secondary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
