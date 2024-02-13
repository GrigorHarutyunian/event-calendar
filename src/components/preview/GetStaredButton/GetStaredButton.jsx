import React from "react";
import "./GetStaredButton.css";
import { motion } from "framer-motion";
export default function GetStaredButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgb(255, 255, 255)" }}
      className="getStarted-button-business"
    >
      <buttun>Get started</buttun>
    </motion.div>
  );
}
