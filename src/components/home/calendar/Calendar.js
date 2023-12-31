import { CalendarHeader } from "./CalendarHeader";
import { useSelector } from "react-redux";
import { CalendarTable } from "./CalendarTable";
export const Calendar = () => {
  const currentDateText = useSelector((store) => store.currentDate);
  const currentDate = new Date(currentDateText);

  return (
    <div className="calendar">
      <CalendarHeader currentDate={currentDate} />
      <CalendarTable currentDate={currentDate} />
    </div>
  );
};
