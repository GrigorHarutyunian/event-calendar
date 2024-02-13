import React from "react";
import CalendarImage from "../CalendarImage/CalendarImage";
import CalendarInfo from "../CalendarInfo/CalendarInfo";
import "./CalendarDeal.css";
import { motion } from "framer-motion";
export default function CalendarDeal() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 1.1 }}
      className="calendar-deal-container"
    >
      <CalendarImage />
      <CalendarInfo />
    </motion.div>
  );
}
