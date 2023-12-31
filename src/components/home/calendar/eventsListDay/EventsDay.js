import "./EventsDay.css";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeState } from "../../../../redux/slices/modalAddEventSlice";
import { SorginEventsArray } from "./SortingEventsArray";
import { RemoveEvent } from "../../../../firebase/service/RemoveEvent";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const EventsDay = () => {
  const dispatch = useDispatch();
  const selectedDayString = useSelector((store) => store.selectedDay);
  const selectedDay = new Date(selectedDayString);
  const event = useSelector((store) => store.events);
  const eventsArr = [...event.events];
  console.log(event);
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
    <>
      <div className="events-day">
        <header className="events-day-header">
          <h2>{selectedDayInWeek}</h2>
          <h4>
            {day} {months[month]} {year}
          </h4>
        </header>

        {SorginEventsArray(eventsArr).map((arr) => {
          return (
            <div key={arr.id} className="event-item">
              <h5>{arr.title}</h5>
              <p>{arr.time}</p>
              <IconButton
                onClick={() =>
                  RemoveEvent(
                    dispatch,
                    selectedDayString,
                    arr.id,
                    selectedDayString + " " + arr.time.split("-")[0]
                  )
                }
                aria-label="delete"
                size="midlle"
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          );
        })}
      </div>
      <Fab
        onClick={() => dispatch(changeState(true))}
        style={{ position: "absolute", bottom: "7%", right: "3%" }}
        color="secondary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </>
  );
};
