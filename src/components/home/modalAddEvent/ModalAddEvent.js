import "./ModalAddEvent.css";
import { useDispatch } from "react-redux";
import { changeState } from "../../../redux/slices/modalAddEventSlice";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { upDateEvents } from "../../../firebase/FirebaseService";

export const ModalAddEvent = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState({ time: "", state: "" });
  const dispatch = useDispatch();
  const selectedDayString = useSelector((store) => store.selectedDay);
  console.log(time, title);
  return (
    <div onClick={() => dispatch(changeState(false))} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(1);
            time.state && upDateEvents(selectedDayString, title, time.time);
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
            {/* e[0].$H, e[1].$H */}
            <SingleInputTimeRangeField
              onChange={(e) => {
                const startTime = e[0]?.valueOf(); // Assuming e[0] represents the start time
                const endTime = e[1]?.valueOf(); // Assuming e[1] represents the end time

                setTime({
                  time: `${e[0]?.$H}:${e[0]?.$m}-${e[1]?.$H}:${e[1]?.$m}`,
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
