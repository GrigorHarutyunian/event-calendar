import React from "react";
import "./SignInSignUpButton.css";
import { motion } from "framer-motion";

export default function SignInSignUpButton({ onClickHandler, text }) {
  return (
    <div>
      <motion.button
        className="signIn-signUp-button-header"
        type="button"
        initial={{
          textShadow: "0px 0px 15px rgb(255, 255, 255)",
        }}
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(0, 0, 0)",
          boxShadow: "0px 0px 15px rgb(255, 255, 255)",
        }}
        transition={{ duration: 0, type: "spring", stiffness: 500 }}
        onClick={onClickHandler}
      >
        {text}
      </motion.button>
    </div>
  );
}