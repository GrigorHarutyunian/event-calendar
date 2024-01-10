import React from "react";
import { motion } from "framer-motion";
import "./LabelComponent.css";

export default function LabelComponent({ text }) {
  return (
    <motion.span
      initial={{
        x: "100vw",
      }}
      animate={{ x: 0, y: 0, rotateZ: 0, rotateX: 0, rotateY: 0 }}
      transition={{
        delay: 1.4,
        duration: 1.2,
        type: "spring",
        stiffness: 100,
      }}
      className="span-text"
    >
      {text}
    </motion.span>
  );
}
