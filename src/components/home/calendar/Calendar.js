import { CalendarHeader } from "./CalendarHeader";
import { useSelector } from "react-redux";
import { CalendarTable } from "./CalendarTable";

export const Calendar = () => {
  const currentDateText = useSelector((store) => store.currentDate);
  const currentDate = new Date(currentDateText);
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
    <div className="calendar">
      <CalendarHeader currentDate={currentDate} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <img className="img" src={images[month]} alt="Month" />{" "}
        <CalendarTable currentDate={currentDate} />
      </div>
    </div>
  );
};
