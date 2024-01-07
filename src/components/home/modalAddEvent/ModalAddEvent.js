import "./ModalAddEvent.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { changeState } from "../../../redux/slices/modalAddEventSlice";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { upDateEvents } from "../../../firebase/service/UpDateEvents";

export const ModalAddEvent = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState({ time: "", state: "" });
  const dispatch = useDispatch();
  const selectedDayString = useSelector((store) => store.selectedDay);

  const [position, setPosition] = useState({ x: 500, y: 150 });
  const modalRef = useRef();
  const handleMouseDown = (e) => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // const handleMouseMove = (e) => {
  //   setPosition({
  //     x: e.clientX - modalRef.current.offsetWidth / 2,
  //     y: e.clientY - modalRef.current.offsetHeight / 2,
  //   });
  // };

  const handleMouseMove = (e) => {
    let x = e.clientX - modalRef.current.offsetWidth / 2;
    let y = e.clientY - modalRef.current.offsetHeight / 2;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + modalRef.current.offsetWidth > window.innerWidth)
      x = window.innerWidth - modalRef.current.offsetWidth;
    if (y + modalRef.current.offsetHeight > window.innerHeight)
      y = window.innerHeight - modalRef.current.offsetHeight;

    setPosition({
      x: x,
      y: y,
    });
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div onClick={() => dispatch(changeState(false))} className="modal">
      <div
        ref={modalRef}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onClick={(e) => e.stopPropagation()}
        className="modal-content"
        onMouseDown={handleMouseDown}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(1);
            time.state &&
              upDateEvents(selectedDayString, title, time.time, dispatch);
          }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            id="standard-basic"
            label="Add Event"
            variant="standard"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <SingleInputTimeRangeField
              onChange={(e) => {
                const startTime = e[0]?.valueOf();
                const endTime = e[1]?.valueOf();

                const formatTime = (date) => {
                  const hours = date?.$H.toString().padStart(2, "0");
                  const minutes = date?.$m.toString().padStart(2, "0");
                  return `${hours}:${minutes}`;
                };

                setTime({
                  time: `${formatTime(e[0])}-${formatTime(e[1])}`,
                  state: startTime < endTime ? true : false,
                });
              }}
              label="From - To"
            />
          </LocalizationProvider>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};
