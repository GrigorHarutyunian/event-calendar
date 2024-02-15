import { CalendarHeader } from "./CalendarHeader";
import { useSelector } from "react-redux";
import { CalendarTable } from "./CalendarTable";

export const Calendar = ({ currentDate, thisDay, userID }) => {
  const month = currentDate.getMonth();
  const images = [
    "january.webp",
    "february.webp",
    "march.webp",
    "april.webp",
    "may.webp",
    "june.webp",
    "july.webp",
    "august.webp",
    "september.webp",
    "october.webp",
    "november.webp",
    "december.webp",
  ];

  return (
    <div className="calendar month">
      <span className="span2">
        <CalendarHeader thisDay={thisDay} currentDate={currentDate} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <img className="img" src={images[month]} alt="Month" />{" "}
          <CalendarTable
            userID={userID}
            thisDay={thisDay}
            currentDate={currentDate}
          />
        </div>
      </span>
    </div>
  );
};
