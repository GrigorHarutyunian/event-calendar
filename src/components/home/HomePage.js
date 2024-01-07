import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./modalAddEvent/ModalAddEvent.js";
import "./HomePage.css";
import { useDispatch } from "react-redux";
import { EventsDay } from "./calendar/eventsListDay/EventsDay.js";
import "./calendar/eventsListDay/EventsDay.js";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
// import { useState } from "react";
import { thisMonth } from "../../redux/slices/currentDateSlice.js";
import { selectedDay } from "../../redux/slices/selectedDaySlice.js";
import { GetEvents } from "../../firebase/service/GetEvents.js";
import { Calendar } from "./calendar/Calendar.js";
import { CalendarWeek } from "./calendar/calendarWeek/CalendarWeek.js";
import { BurgerMenu } from "./burger/BurgerMenu.js";
import { ModalAddEvent } from "./modalAddEvent/ModalAddEvent.js";
import { CalendarYear } from "./calendar/calendarYear/CalendarYear.js";
import { changeCalendarType } from "../../redux/slices/calendarTypeSlice.js";
import { store } from "../../redux/store.js";

export const HomePage = () => {
  const calendarForm = useSelector((store) => store.calendarType);
  const currentDateText = useSelector((store) => store.currentDate);
  console.log(currentDateText);
  const thisDay = useSelector((store) => store.selectedDay);
  const date = new Date(thisDay);
  const currentDate = new Date(currentDateText);
  const day = new Date();
  const burgerState = useSelector((state) => state.burger);
  const thereIsModal = useSelector((store) => store.modalAddEvent);
  const dispatch = useDispatch();
  return (
    <div className="home-page">
      <CSSTransition
        in={thereIsModal}
        timeout={1500}
        classNames={{
          enter: "modal-enter",
          enterActive: "modal-enter-active",
          exit: "modal-exit",
          exitActive: "modal-exit-active",
        }}
        unmountOnExit
      >
        <ModalAddEvent />
      </CSSTransition>

      <BurgerMenu />
      <div className={burgerState ? "burger-open" : "burger-close"}>
        <header className="header">
          <FormControl style={{ maxWidth: "sm" }}>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              value={calendarForm}
              onChange={(event) =>
                dispatch(changeCalendarType(event.target.value))
              }
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={"Month"}>Month</MenuItem>
              <MenuItem value={"Year"}>Year</MenuItem>
              <MenuItem value={"Week"}>Week</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{
              padding: "13px 23px",
              color: "black",
              backgroundColor: "#A3BB98",
            }}
            onClick={() => {
              GetEvents(dispatch, day.toDateString());
              dispatch(selectedDay(day.toDateString()));
              dispatch(thisMonth());
            }}
            variant="outlined"
          >
            Today
          </Button>
          <div className="image-container">
            <img src={user?.image} />
          </div>
        </header>

        <Button
          style={{
            position: "absolute",
            top: "10px",
            right: "60px",
            padding: "10px 50px",
            color: "black",
            backgroundColor: "#A3BB98",
          }}
          variant="outlined"
        >
          Login
        </Button>
        {calendarForm === "Year" ? (
          <CalendarYear thisDay={date} currentDate={currentDate} />
        ) : calendarForm === "Week" ? (
          <CalendarWeek thisDay={date} currentDate={currentDate} />
        ) : (
          <Calendar currentDate={currentDate} />
        )}
        <EventsDay />
      </div>
    </div>
  );
};
