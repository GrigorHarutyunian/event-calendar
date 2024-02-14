import React from "react";
import BusinessInfoComp from "../BusinessInfoComp/BusinessInfoComp";
import PageFeatureComp from "../PageFeatureComp/PageFeatureComp";
import "./Business.css";
import WrapperComp from "../WrapperComp/WrapperComp";
import { motion } from "framer-motion";

function Business() {
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

export default WrapperComp(Business, "business");
