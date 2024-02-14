import React from "react";
import "./GetStaredButton.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function GetStaredButton() {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgb(255, 255, 255)" }}
      className="getStarted-button-business"
      onClick={() => {
        navigate("/login");
      }}
    >
      <buttun>Get started</buttun>
    </motion.div>
  );
}
