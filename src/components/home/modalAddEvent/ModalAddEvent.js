import "./ModalAddEvent.css";
import { useDispatch } from "react-redux";
import { changeState } from "../../../redux/slices/modalAddEventSlice";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import TextField from "@mui/material/TextField";

export const ModalAddEvent = () => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(changeState(false))} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <TextField id="standard-basic" label="Add Event" variant="standard" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SingleInputTimeRangeField label="From - To" />
        </LocalizationProvider>
      </div>
    </div>
  );
};
