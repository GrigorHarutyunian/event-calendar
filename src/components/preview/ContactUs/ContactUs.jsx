import React from "react";
import "./ContactUs.css";
import { motion } from "framer-motion";
export default function ContactUs() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 1.1 }}
    >
      ContactUs
    </motion.div>
  );
}
