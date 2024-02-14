import "./modalAddEvent/ModalAddEvent.js";
import "./HomePage.css";
import "./calendar/eventsListDay/EventsDay.js";
import { CSSTransition } from "react-transition-group";

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

export const HomePage = () => {
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
  );
};
