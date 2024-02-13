import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";
import { ArrowOutward } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function GetStarted() {
  const navigate = useNavigate();
  const buttonVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: {
        delay: 1.5,
        duration: 2.4,
        type: "spring",
        stiffness: 70,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 15px rgb(255, 255, 255)",
      transition: {
        delay: 0,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="custom-button"
      onClick={() => {
        navigate("/login");
      }}
    >
      <div className="button-container">
        <div className="flex-row">
          <p className="button-text">
            <span className="text-gradient">Get</span>
          </p>
          <ArrowOutward />
        </div>
        <div className="flex-row">
          <p className="button-text">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
