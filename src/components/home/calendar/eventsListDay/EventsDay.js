import "./EventsDay.css";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeState } from "../../../../redux/slices/modalAddEventSlice";
import { SorginEventsArray } from "./SortingEventsArray";
import { RemoveEvent } from "../../../../firebase/service/RemoveEvent";
import IconButton from "@mui/material/IconButton";
import GroupsIcon from "@mui/icons-material/Groups";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LiquorIcon from "@mui/icons-material/Liquor";
import LaptopIcon from "@mui/icons-material/Laptop";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CakeIcon from "@mui/icons-material/Cake";
import DeleteIcon from "@mui/icons-material/Delete";

const iconMapping = {
  meeting: <GroupsIcon />,
  fitnnes: <FitnessCenterIcon />,
  party: <LiquorIcon />,
  coding: <LaptopIcon />,
  coffee: <CoffeeIcon />,
  cake: <CakeIcon />,
};

export const EventsDay = ({ userID }) => {
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
        <span className="span1">
          <header className="events-day-header">
            <h2>{selectedDayInWeek}</h2>
            <h4>
              {day} {months[month]} {year}
            </h4>
          </header>

          {SorginEventsArray(eventsArr).length > 0 ? (
            SorginEventsArray(eventsArr).map((arr) => {
              return (
                <div key={arr.id} className="event-item">
                  <div className="event-icon">{iconMapping[arr.icon]}</div>
                  <div className="event-title">
                    <h5>{arr.title}</h5>
                  </div>
                  <div className="event-time">
                    <p>{arr.time}</p>
                  </div>
                  <IconButton
                    onClick={() =>
                      RemoveEvent(
                        dispatch,
                        selectedDayString,
                        arr.id,
                        selectedDayString + " " + arr.time.split("-")[0],
                        userID
                      )
                    }
                    aria-label="delete"
                    size="midlle"
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </div>
              );
            })
          ) : (
            <div className="no-events">
              <p>No events for this day</p>
            </div>
          )}
        </span>
      </div>
      <Fab
        onClick={() => dispatch(changeState(true))}
        style={{ position: "absolute", bottom: "4%", right: "3%" }}
        color="secondary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </>
  );
};
