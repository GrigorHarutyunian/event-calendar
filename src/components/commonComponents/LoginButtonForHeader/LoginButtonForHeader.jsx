import React from "react";
import "./LoginButtonForHeader.css";
import { motion } from "framer-motion";

export default function LoginButtonForHeader({ onClickHandler, text }) {
  return (
    <div>
      <motion.button
        className="signIn-signUp-button-header"
        type="button"
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255, 255, 255)",
          boxShadow: "0px 0px 15px rgb(0, 0, 0)",
        }}
        transition={{ duration: 0, type: "spring", stiffness: 500 }}
        onClick={onClickHandler}
      >
        {text}
      </motion.button>
    </div>
  );
}
