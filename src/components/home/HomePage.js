import { Calendar } from "./calendar/Calendar.js";
import { BurgerMenu } from "./burger/BurgerMenu.js";
import { ModalAddEvent } from "./modalAddEvent/ModalAddEvent.js";
import Button from "@mui/material/Button";
import "./modalAddEvent/ModalAddEvent.js";
import "./HomePage.css";
import { useDispatch } from "react-redux";
import { EventsDay } from "./calendar/eventsListDay/EventsDay.js";
import "./calendar/eventsListDay/EventsDay.js";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { thisMonth } from "../../redux/slices/currentDateSlice.js";

export const HomePage = () => {
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
          <Button onClick={() => dispatch(thisMonth())} variant="outlined">
            Today
          </Button>
        </header>
        <Calendar />
        <EventsDay />
      </div>
    </div>
  );
};
