import React, { useEffect, useState } from "react";
import "./TimeShowing.css";

export default function TimeShowing() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      setTime(currentDate[Symbol.toPrimitive]("string"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <div className="time-container">{time}</div>;
}
