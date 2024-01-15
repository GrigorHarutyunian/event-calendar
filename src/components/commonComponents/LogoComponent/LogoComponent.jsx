import React from "react";
import "./LogoComponent.css";
import { MyLogo } from "../../../assets/index";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function LogoComponent() {
  const navigate = useNavigate();
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      dragElastic={1}
      whileHover={{ textShadow: "0px 0px 15px rgb(255, 255, 255)" }}
      className="header-logo-container"
      onClick={() => navigate("/")}
    >
      <motion.img className="header-logo" src={MyLogo} alt="log" />
      <span className="logo-span">Calendar</span>
      <div className="logo-bg" />
    </motion.div>
  );
}
