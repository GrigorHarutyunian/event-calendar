import React from "react";
import "./SendMessage.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function SendMessage() {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgb(255, 255, 255)" }}
      className="send-message-button"
      type="submit"
    >
      Send message
    </motion.button>
  );
}
