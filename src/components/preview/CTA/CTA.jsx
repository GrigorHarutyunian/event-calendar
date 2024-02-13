import React from "react";
import GetStaredButton from "../GetStaredButton/GetStaredButton";
import "./CTA.css";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 1.1 }}
      className="CTA-container"
    >
      <div className="CTA-description">
        <h2 className="CTA-first-title">Let's try our service now!</h2>
        <p className="CTA-paragaraf">
          Everything you need to acdept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="CTA-button-container">
        <GetStaredButton />
      </div>
    </motion.section>
  );
}
