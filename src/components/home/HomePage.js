import "./modalAddEvent/ModalAddEvent.js";
import "./HomePage.css";
import "./calendar/eventsListDay/EventsDay.js";
import { CSSTransition } from "react-transition-group";

import { FormControl, Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import { changeCalendarType } from "../../redux/slices/calendarTypeSlice";
import { selectedDay } from "../../redux/slices/selectedDaySlice";
import { thisMonth } from "../../redux/slices/currentDateSlice";

import { EventsDay } from "./calendar/eventsListDay/EventsDay.js";

import { Calendar } from "./calendar/Calendar.js";
import { CalendarWeek } from "./calendar/calendarWeek/CalendarWeek.js";

import { ModalAddEvent } from "./modalAddEvent/ModalAddEvent.js";
import { CalendarYear } from "./calendar/calendarYear/CalendarYear.js";

import { GetFriendsList } from "../../firebase/service/GetFriendsList.js";
import { GetEvents } from "../../firebase/service/GetEvents.js";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useIsLoggin } from "../../hooks";

import { getWeather } from "./weathers/getWeather.js";

import { EventInivations } from "../../firebase/service/EventInvitations.js";
import { InvitationsModal } from "./burger/invitationsModal/InvitationModal.js";
import { Preloader } from "../commonComponents";

export const HomePage = () => {
  const day = new Date();
  const calendarForm = useSelector((store) => store.calendarType);
  const currentDateText = useSelector((store) => store.currentDate);
  const isLoggedIn = useSelector((store) => store.userIsLogin);
  const thisDay = useSelector((store) => store.selectedDay);
  const date = new Date(thisDay);
  const currentDate = new Date(currentDateText);
  const burgerState = useSelector((state) => state.burger);
  const thereIsModal = useSelector((store) => store.modalAddEvent);
  const dispatch = useDispatch();
  const userID = useSelector((store) => store.userData.id);
  console.log(thisDay);
  console.log(currentDate);
  const modalInvitation = useSelector((store) => store.modalInvitations);
  useEffect(() => {
    GetFriendsList(dispatch);
    GetEvents(dispatch, currentDateText, userID);
    EventInivations(userID, dispatch);
  }, [modalInvitation]);

  useIsLoggin(!isLoggedIn, "/login", isLoggedIn);
  const Inivations = useSelector((store) => store.invitation);
  return (
    <section className="home-page-container">
      <Preloader />
      <div className="home-calendar-today-regulate-container">
        <FormControl style={{ maxWidth: "sm", width: "150px" }}>
          <Select
            value={calendarForm}
            onChange={(event) =>
              dispatch(changeCalendarType(event.target.value))
            }
            style={{
              background: "linear-gradient(to right, #2b3248, #7b88cc)",
              borderRadius: "5px",
              fontSize: "15px",
              outline: "none",
              border: "none",
              fontWeight: "600",
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
          >
            <MenuItem value={"Month"}>Month</MenuItem>
            <MenuItem value={"Year"}>Year</MenuItem>
            <MenuItem value={"Week"}>Week</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="home-today-button">
        <Button
          style={{
            padding: "11px 23px",
            background: "linear-gradient(to right, #2b3248, #7b88cc)",
            color: "black",
            outline: "none",
            border: "none",
            fontSize: "15px",
            fontWeight: "600",
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
      </div>
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
        <CSSTransition
          in={modalInvitation}
          timeout={1500}
          classNames={{
            enter: "modal-enter-invitation",
            enterActive: "modal-enter-active-invitation",
            exit: "modal-exit-invitation",
            exitActive: "modal-exit-active-invitation",
          }}
          unmountOnExit
        >
          <InvitationsModal invitations={Inivations} dispatch={dispatch} />
        </CSSTransition>

        <div className={burgerState ? "burger-open" : "burger-close"}>
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
          {getWeather(currentDate.getMonth())}
          <EventsDay userID={userID} />
        </div>
      </div>
    </section>
  );
};
