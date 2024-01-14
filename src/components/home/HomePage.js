import "./modalAddEvent/ModalAddEvent.js";
import "./HomePage.css";
import "./calendar/eventsListDay/EventsDay.js";
import { CSSTransition } from "react-transition-group";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import { EventsDay } from "./calendar/eventsListDay/EventsDay.js";
import { thisMonth } from "../../redux/slices/currentDateSlice.js";
import { selectedDay } from "../../redux/slices/selectedDaySlice.js";
import { Calendar } from "./calendar/Calendar.js";
import { CalendarWeek } from "./calendar/calendarWeek/CalendarWeek.js";
import { BurgerMenu } from "./burger/BurgerMenu.js";
import { ModalAddEvent } from "./modalAddEvent/ModalAddEvent.js";
import { CalendarYear } from "./calendar/calendarYear/CalendarYear.js";
import { changeCalendarType } from "../../redux/slices/calendarTypeSlice.js";

import { GetFriendsList } from "../../firebase/service/GetFriendsList.js";
import { GetEvents } from "../../firebase/service/GetEvents.js";

import { userIsLogin } from "../../redux/slices/userIsLoginSlice.js";
import { pageReloader } from "../../utils/pageReloader.js";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logOutFunction } from "../../utils/logOutFunction.js";

export const HomePage = () => {
  const calendarForm = useSelector((store) => store.calendarType);
  const currentDateText = useSelector((store) => store.currentDate);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((store) => store.userIsLogin);
  const thisDay = useSelector((store) => store.selectedDay);
  const date = new Date(thisDay);
  const currentDate = new Date(currentDateText);
  const day = new Date();
  const burgerState = useSelector((state) => state.burger);
  const thereIsModal = useSelector((store) => store.modalAddEvent);
  const dispatch = useDispatch();
  const userID = useSelector((store) => store.userData.id);
  const user = useSelector((store) => store.userData);
  useEffect(() => {
    GetFriendsList(dispatch);
    GetEvents(dispatch, currentDateText, userID);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

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
          <FormControl
            style={{ maxWidth: "sm", width: "200px", background: "#A3BB98" }}
          >
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
              GetEvents(dispatch, day.toDateString(), userID);
              dispatch(selectedDay(day.toDateString()));
              dispatch(thisMonth());
            }}
            variant="outlined"
          >
            Today
          </Button>
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
          onClick={() => {
            dispatch(userIsLogin());
            pageReloader(dispatch);
          }}
        >
          LogOut
        </Button>
        {calendarForm === "Year" ? (
          <CalendarYear
            userID={userID}
            thisDay={date}
            currentDate={currentDate}
          />
        ) : calendarForm === "Week" ? (
          <CalendarWeek
            userID={userID}
            thisDay={date}
            currentDate={currentDate}
          />
        ) : (
          <Calendar userID={userID} currentDate={currentDate} />
        )}
        <EventsDay userID={userID} />
      </div>
    </div>
  );
};
