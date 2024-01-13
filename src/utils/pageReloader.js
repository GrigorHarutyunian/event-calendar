import { burgerReloader } from "../redux/slices/burgerSlice";
import { calendarTypereloader } from "../redux/slices/calendarTypeSlice";
import { currentDateReloader } from "../redux/slices/currentDateSlice";
import { eventsReloader } from "../redux/slices/eventsSlice";
import { selectedDayReloader } from "../redux/slices/selectedDaySlice";
import { userDataReloader } from "../redux/slices/userDataSlice";
import { userIsLoggedReloader } from "../redux/slices/userIsLoginSlice";

export const pageReloader = (dispatch) => {
  const arr = [
    burgerReloader(),
    calendarTypereloader(),
    currentDateReloader(),
    eventsReloader(),
    selectedDayReloader(),
    userDataReloader(),
    userIsLoggedReloader(),
  ];
  arr.forEach((func) => {
    dispatch(func);
  });
};
