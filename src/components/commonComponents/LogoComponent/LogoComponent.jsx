import React from "react";
import "./LogoComponent.css";
import { MyLogo } from "../../../assets/index";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function LogoComponent() {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ textShadow: "0px 0px 15px rgb(255, 255, 255)" }}
      className="header-logo-container"
      onClick={() => navigate("/")}
    >
      <img className="header-logo" src={MyLogo} alt="log" />
      <span className="logo-span">Calendar</span>
      <div className="logo-bg" />
    </motion.div>
  );
}
