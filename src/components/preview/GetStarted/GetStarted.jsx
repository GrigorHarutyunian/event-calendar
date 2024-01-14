import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";
import { ArrowOutward } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function GetStarted() {
  const navigate = useNavigate();
  const buttonVariants = {
    hidden: { x: "-100vw", rotate: 360 },
    visible: {
      x: 0,
      rotate: 0,
      transition: {
        delay: 1.5,
        duration: 2.4,
        type: "spring",
        stiffness: 70,
      },
    },
    hover: {
      scale: 1.3,
      textShadow: "0px 0px 15px rgb(0, 0, 0)",
      boxShadow: "0px 0px 15px rgb(255, 255, 255)",
    },
  };

  return (
    <motion.div
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      dragElastic={1}
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
