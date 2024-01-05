import "./Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectedDay } from "../../../redux/slices/selectedDaySlice.js";
import { GetEvents } from "../../../firebase/service/GetEvents.js";

const today = new Date().getDate();
const thisMont = new Date().getMonth();
const thisYear = new Date().getFullYear();

export const CalendarTable = ({ currentDate }) => {
  const calendarForm = useSelector((store) => store.calendarType);
  const dispatch = useDispatch();
  const selectedDayValue = useSelector((store) => store.selectedDay);

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let daysInMonth = [];
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  for (
    let day = startOfMonth;
    day <= endOfMonth;
    day.setDate(day.getDate() + 1)
  ) {
    daysInMonth = [...daysInMonth, new Date(day)];
  }

  return (
    <table>
      <thead>
        <tr>
          {weekDays.map((day) => (
            <th
              style={{ padding: calendarForm === "Month" ? "20px" : "3px" }}
              key={day}
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {renderCalendarRows(
          daysInMonth,
          dispatch,
          selectedDayValue,
          calendarForm
        )}
      </tbody>
    </table>
  );
};

const renderCalendarRows = (days, dispatch, selectedDayValue, calendarForm) => {
  let rows = [];
  let currentRow = [];
  let firstDayInWeek = days[0].getDay() - 1 === -1 ? 6 : days[0].getDay() - 1;

  while (firstDayInWeek > 0) {
    currentRow = [...currentRow, <td key={Math.random()}></td>];
    firstDayInWeek--;
  }

  days.forEach((day) => {
    currentRow = [
      ...currentRow,
      <td
        style={{ padding: calendarForm === "Month" ? "20px" : "3px" }}
        onClick={() => {
          console.log(selectedDayValue);
          dispatch(selectedDay(day.toDateString()));
          GetEvents(dispatch, day.toDateString());
        }}
        className={
          day.getDate() === today &&
          day.getMonth() === thisMont &&
          day.getFullYear() === thisYear
            ? "today"
            : "day"
        }
        key={`${day.getDate()}`}
      >
        {day.getDate()}
      </td>,
    ];

    if (day.getDay() === 0) {
      rows = [...rows, <tr key={rows.length}>{currentRow}</tr>];
      currentRow = [];
    }
  });

  if (currentRow.length > 0) {
    rows = [...rows, <tr key={rows.length}>{currentRow}</tr>];
  }

  return rows;
};
