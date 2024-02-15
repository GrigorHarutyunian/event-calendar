import React from "react";
import { CalendarImage, CalendarInfo } from "../index";
import "./CalendarDeal.css";
import WrapperComp from "../WrapperComp/WrapperComp";

import { motion } from "framer-motion";

function CalendarDeal() {
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

export default WrapperComp(CalendarDeal, "calendarDeal");
