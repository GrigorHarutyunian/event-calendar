import React from "react";
import "./ButtonComponent.css";
import { motion } from "framer-motion";
export default function ButtonComponent({ text, type, onClickHandler, form }) {
  return (
    <div>
      <motion.button
        className="button"
        type={type}
        initial={{
          textShadow: "0px 0px 15px rgb(255, 255, 255)",
        }}
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(0, 0, 0)",
          boxShadow: "0px 0px 15px rgb(0, 0, 0)",
        }}
        onClick={onClickHandler}
      >
        {text}
      </motion.button>
    </div>
  );
}
