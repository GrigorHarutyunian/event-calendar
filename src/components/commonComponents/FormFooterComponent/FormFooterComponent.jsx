import React from "react";
import { Link } from "react-router-dom";
import "./FormFooterComponent.css";
import { motion } from "framer-motion";
export default function FormFooterComponent({ text1, text2, link }) {
  return (
    <div>
      <div className="line-with-text">
        <hr className="line" />
        <span className="or-text">{text1}</span>
        <hr className="line" />
      </div>
      <motion.div
        whileHover={{
          scale: 1.3,
        }}
        transition={{ duration: 0, type: "spring", stiffness: 500 }}
        className="sign-up-container"
      >
        <Link className="link-to-login" to={link}>
          <span>{text2}</span>
        </Link>
      </motion.div>
    </div>
  );
}
