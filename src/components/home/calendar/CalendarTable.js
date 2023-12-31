import "./Calendar.css";
import { useDispatch } from "react-redux";
import { changeState } from "../../../redux/slices/modalSingleDaySlice";

export const CalendarTable = ({ currentDate }) => {
  const dispatch = useDispatch();
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
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>{renderCalendarRows(daysInMonth, dispatch)}</tbody>
    </table>
  );
};

const renderCalendarRows = (days, dispatch) => {
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
        onClick={() => dispatch(changeState())}
        day={day}
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
