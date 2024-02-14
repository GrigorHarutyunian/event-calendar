import React from "react";
import "./CTAWithFooterContainer.css";
import CTA from "../CTA/CTA";
import PreviewFooter from "../PreviewFooter/PreviewFooter";
import WrapperComp from "../WrapperComp/WrapperComp";
import { motion } from "framer-motion";

export default function CTAWithFooterContainer() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 1.1 }}
    >
      <CTA />
      <PreviewFooter />
    </motion.div>
  );
}
