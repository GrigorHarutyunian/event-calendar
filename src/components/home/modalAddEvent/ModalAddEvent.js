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
import { MyAutocomplete } from "../../commonComponents/InputAutocomplete/Autocomplete";
import dayjs from "dayjs";
import { InputLabel, Button } from "@mui/material";

export const ModalAddEvent = () => {
  const selectedDayString = useSelector((store) => store.selectedDay);
  const user = useSelector((store) => store.userData);
  const friends = useSelector((store) => store.userFirends);
  const [friendsInfo, setFriendsInfo] = useState([]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState({ time: "", state: "" });
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState({ x: 500, y: 150 });
  const dispatch = useDispatch();

  const modalRef = useRef();
  const inputRef = useRef(null);
  const timeRef = useRef(null);
  const iconRef = useRef(null);
  const guestsRef = useRef(null);
  const descriptionRef = useRef(null);

  const calendarTypes = useSelector((store) => store.calendarType);
  const selectedTime = useSelector((store) => store.selectedTime);

  let initialMousePos = { x: 0, y: 0 };
  let initialModalPos = {
    x: modalRef.current
      ? window.innerWidth / 2 - modalRef.current.offsetWidth / 2
      : 0,
    y: 0,
  };

  const handleMouseDown = (e) => {
    if (
      e.target.tagName.toLowerCase() === "input" ||
      e.target.tagName.toLowerCase() === "textarea"
    ) {
      return;
    }

    initialMousePos = { x: e.clientX, y: e.clientY };
    initialModalPos = {
      x: modalRef.current.offsetLeft,
      y: modalRef.current.offsetTop,
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!modalRef.current) return;

    let dx = e.clientX - initialMousePos.x;
    let dy = e.clientY - initialMousePos.y;

    let x = initialModalPos.x + dx;
    let y = initialModalPos.y + dy;

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
    title &&
      time.state &&
      upDateEvents(
        selectedDayString,
        title,
        time.time,
        dispatch,
        icon,
        description,
        user,
        friendsInfo
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
                  defaultValue={
                    calendarTypes === "Week"
                      ? [
                          dayjs(`2022-04-17T${selectedTime.start}`),
                          dayjs(`2022-04-17T${selectedTime.end}`),
                        ]
                      : undefined // Set to undefined if you don't want a default value for other calendar types
                  }
                  inputRef={timeRef}
                  onChange={handleTime}
                  label="Control Time"
                />
              </LocalizationProvider>
            </div>
          </div>

          <div className="modal-content-div ">
            <GroupAddIcon onClick={() => guestsRef.current.focus()} />
            <div style={{ width: "65%" }}>
              <MyAutocomplete
                friends={friends}
                setFriendsInfo={setFriendsInfo}
                friendsInfo={friendsInfo}
                inputRef={guestsRef}
              />
            </div>
          </div>

          <div className="modal-content-div ">
            <ImageIcon onClick={() => iconRef.current.focus()} />
            <div style={{ width: "65%" }}>
              <FormControl style={{ maxWidth: "m" }}>
                <InputLabel id="demo-simple-select-label">
                  Select an Icon
                </InputLabel>
                <Select
                  value={icon}
                  onChange={(event) => setIcon(event.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  inputRef={iconRef}
                  placeholder="Select an Icon"
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
                placeholder="Descriptions"
                ref={descriptionRef}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
          </div>

          <Button
            type="submit"
            style={{ position: "absolute", bottom: "4%", right: "5%" }}
            variant="contained"
          >
            Add Event
          </Button>
        </form>
      </div>
    </div>
  );
};
