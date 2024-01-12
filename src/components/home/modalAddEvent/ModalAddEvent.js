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
import EditIcon from "@mui/icons-material/Edit";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GroupsIcon from "@mui/icons-material/Groups";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LiquorIcon from "@mui/icons-material/Liquor";
import LaptopIcon from "@mui/icons-material/Laptop";
import CoffeeIcon from "@mui/icons-material/Coffee";
import ImageIcon from "@mui/icons-material/Image";
import SubjectIcon from "@mui/icons-material/Subject";
import CakeIcon from "@mui/icons-material/Cake";

export const ModalAddEvent = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState({ time: "", state: "" });
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState({ x: 500, y: 150 });
  const dispatch = useDispatch();
  const selectedDayString = useSelector((store) => store.selectedDay);
  const userId = useSelector((store) => store.userData.id);
  const modalRef = useRef();
  const inputRef = useRef(null);
  const timeRef = useRef(null);
  const iconRef = useRef(null);
  const guestsRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleMouseDown = (e) => {
    if (
      e.target.tagName.toLowerCase() === "input" ||
      e.target.tagName.toLowerCase() === "textarea"
    ) {
      return;
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(1);
    time.state &&
      upDateEvents(
        selectedDayString,
        title,
        time.time,
        dispatch,
        icon,
        description,
        userId
      );
  };

  const handleTime = (e) => {
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
  };

  const handleModalState = () => {
    dispatch(changeState(false));
  };

  return (
    <div onClick={handleModalState} className="modal">
      <div
        ref={modalRef}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onClick={(e) => e.stopPropagation()}
        className="modal-content"
        onMouseDown={handleMouseDown}
      >
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-content-div">
            <EditIcon onClick={() => inputRef.current.focus()} />
            <div style={{ width: "65%" }}>
              <TextField
                inputRef={inputRef}
                onChange={(e) => setTitle(e.target.value)}
                id="standard-basic"
                label="Add Event"
                variant="standard"
              />
            </div>
          </div>

          <div className="modal-content-div ">
            <AccessTimeIcon onClick={() => timeRef.current.focus()} />
            <div style={{ width: "65%" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <SingleInputTimeRangeField
                  inputRef={timeRef}
                  onChange={handleTime}
                  label="From - To"
                />
              </LocalizationProvider>
            </div>
          </div>

          <div className="modal-content-div ">
            <GroupAddIcon onClick={() => guestsRef.current.focus()} />
            <div style={{ width: "65%" }}>
              <TextField
                id="standard-basic"
                label="Add Guests"
                variant="standard"
                inputRef={guestsRef}
              />
            </div>
          </div>

          <div className="modal-content-div ">
            <ImageIcon onClick={() => iconRef.current.focus()} />
            <div style={{ width: "65%" }}>
              <FormControl style={{ maxWidth: "m" }}>
                <Select
                  value={icon}
                  onChange={(event) => setIcon(event.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  inputRef={iconRef}
                >
                  <MenuItem value={"meeting"}>
                    <GroupsIcon />
                  </MenuItem>
                  <MenuItem value={"fitnnes"}>
                    <FitnessCenterIcon />
                  </MenuItem>
                  <MenuItem value={"party"}>
                    <LiquorIcon />
                  </MenuItem>
                  <MenuItem value={"coding"}>
                    <LaptopIcon />
                  </MenuItem>
                  <MenuItem value={"coffee"}>
                    <CoffeeIcon />
                  </MenuItem>
                  <MenuItem value={"cake"}>
                    <CakeIcon />
                  </MenuItem>
                  {/* Add your other MenuItems here */}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="modal-content-div ">
            <SubjectIcon onClick={() => descriptionRef.current.focus()} />
            <div style={{ width: "65%" }}>
              <textarea
                className="modal-textarea"
                ref={descriptionRef}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <button
            style={{ position: "absolute", bottom: "4%", right: "5%" }}
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
