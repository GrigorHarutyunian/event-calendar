import React, { useEffect, useState } from "react";
import "./TimeShowing.css";
// import { useSelector } from "react-redux";
// import { sendEmail } from "../../../utils/sendEmail";

export default function TimeShowing() {
  const [time, setTime] = useState("");
  // const events = useSelector((store) => store.events);
  // const user = useSelector((store) => store.userData);
  // const eventTimes = events.events?.map((event) => {
  //   const newTime = event.time.split("-")[0];
  //   return newTime;
  // });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const currentDateString = currentDate[Symbol.toPrimitive]("string");
      // eventTimes.forEach((eventTime) => {
      //   const currentTime = currentDateString
      //     .split(" ")[4]
      //     .split(":")
      //     .slice(0, 2)
      //     .join(":");
      //   console.log(eventTime);
      //   console.log(currentTime);
      //   if (eventTime === currentTime) {
      //     alert("sent");
      //     sendEmail(user.email, "OOOh!");
      //   }
      // });
      setTime(currentDateString);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <div className="time-container">{time}</div>;
}
