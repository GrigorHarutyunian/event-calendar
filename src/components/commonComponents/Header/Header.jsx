import React from "react";
import TimeShowing from "../TimeShowing/TimeShowing";
import LogoComponent from "../LogoComponent/LogoComponent";
import "./Header.css";
import IsLoginComponent from "../IsLogin(Accout)Component/IsLogin(Accout)Component";
import { BurgerMenu } from "../../home/burger/BurgerMenu";
import { FormControl, Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { GetEvents } from "../../../firebase/service/GetEvents";
import { useSelector } from "react-redux";
import { changeCalendarType } from "../../../redux/slices/calendarTypeSlice";
import { selectedDay } from "../../../redux/slices/selectedDaySlice";
import { thisMonth } from "../../../redux/slices/currentDateSlice";
export default function Header() {
  const dispatch = useDispatch();
  const calendarForm = useSelector((store) => store.calendarType);
  const userID = useSelector((store) => store.userData.id);
  const day = new Date();
  const isLoggedIn = useSelector((store) => store.userIsLogin);
  return (
    <div className="main-header-container">
      <div className="main-header-logo-container">
        {isLoggedIn && <BurgerMenu />}
        <LogoComponent />
      </div>
      {isLoggedIn && (
        <>
          <FormControl style={{ maxWidth: "sm", width: "150px" }}>
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
              color: "aqua",
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
        </>
      )}
      <div className="main-header-time-info-container">
        {/* <TimeShowing /> */}
        <IsLoginComponent />
      </div>
    </div>
  );
}
