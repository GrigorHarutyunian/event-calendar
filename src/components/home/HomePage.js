import { Calendar } from "./calendar/Calendar.js";
import { ModalSingleDay } from "./modalSingleDay/ModalSingleDay.js";
import "./modalSingleDay/ModalSingleDay";
import "./HomePage.css";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
export const HomePage = () => {
  const thereIsModal = useSelector((store) => store.modalSingleDay);
  console.log(thereIsModal);
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
        <ModalSingleDay />
      </CSSTransition>

      <Calendar />
    </div>
  );
};
