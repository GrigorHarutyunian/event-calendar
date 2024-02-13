import React from "react";
import BusinessInfoComp from "../BusinessInfoComp/BusinessInfoComp";
import PageFeatureComp from "../PageFeatureComp/PageFeatureComp";
import "./Business.css";
import { motion } from "framer-motion";
export default function Business() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 1.1 }}
      className="business-container"
    >
      <BusinessInfoComp />
      <PageFeatureComp />
    </motion.div>
  );
}
