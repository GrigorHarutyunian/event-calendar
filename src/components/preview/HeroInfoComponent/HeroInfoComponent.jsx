import React from "react";
import "./HeroInfoComponent.css";
import GetStarted from "../GetStarted/GetStarted";
import { motion } from "framer-motion";
export default function HeroInfoComponent() {
  const labelVariant1 = {
    hidden: { x: "100vw" },
    visible: {
      x: 0,
      rotate: 0,
      transition: {
        delay: 1,
        duration: 1.1,
        type: "spring",
        stiffness: 100,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        delay: 1,
        duration: 1.1,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const labelVariant2 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay: 2,
        duration: 1.2,
      },
    },
    exit: {
      scale: 0,
      transition: {
        delay: 2,
        duration: 1.2,
      },
    },
  };

  return (
    <div className="hero-info-container">
      <div className="hero-button-with-intro">
        <motion.div
          variants={labelVariant1}
          initial="hidden"
          animate="visible"
          className="hero-intro"
        >
          <span className="hero-span-1">The Next</span>
          <br />
          <span className="hero-span-2">Generation</span>
        </motion.div>
        <div className="hero-button-container">
          <GetStarted />
        </div>
      </div>
      <motion.p
        variants={labelVariant1}
        initial="hidden"
        animate="visible"
        className="hero-p"
      >
        Event corditating
      </motion.p>
      <motion.div
        variants={labelVariant2}
        initial="hidden"
        animate="visible"
        className="hero-span-container"
      >
        <span className="hero-span-info">
          Efficiently organize your schedule with our intuitive calendar and
          events website. Seamlessly manage events, set reminders, and stay on
          track effortlessly. Simplify your life, one click at a time.
        </span>
      </motion.div>
    </div>
  );
}
