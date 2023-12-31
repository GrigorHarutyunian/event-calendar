import { CalendarHeader } from "./CalendarHeader";
import { useSelector } from "react-redux";
import { CalendarTable } from "./CalendarTable";

export const Calendar = ({ currentDate, thisDay }) => {
  const month = currentDate.getMonth();
  console.log(currentDate);
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

  console.log("🚀 ~ file: Calendar.js:37 ~ Calendar ~ thisDay:", thisDay);

  return (
    <div className="calendar month">
      <CalendarHeader thisDay={thisDay} currentDate={currentDate} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <img className="img" src={images[month]} alt="Month" />{" "}
        <CalendarTable thisDay={thisDay} currentDate={currentDate} />
      </div>
    </div>
  );
};
