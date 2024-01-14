import React from "react";
import "./HeroImageComponent.css";
import { Picture3ForPreview } from "../../../assets/";
import { motion } from "framer-motion";
export default function HeroImageComponent() {
  const imageVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay: 1.2,
        duration: 1.2,
      },
    },
  };
  return (
    <div className="heroImage-container">
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="hero-image-container"
      >
        <img className="hero-img" src={Picture3ForPreview} alt="Preview" />
        <div className="hero-img-bg" />
      </motion.div>
    </div>
  );
}
