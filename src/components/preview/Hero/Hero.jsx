import React from "react";
import "./Hero.css";
import { HeroInfoComponent, HeroImageComponent } from "../index";
import WrapperComp from "../WrapperComp/WrapperComp";

import { motion } from "framer-motion";
function Hero() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 1.1 }}
      className="hero-container"
    >
      <HeroInfoComponent />
      <HeroImageComponent />
    </motion.div>
  );
}

export default WrapperComp(Hero, "hero");
