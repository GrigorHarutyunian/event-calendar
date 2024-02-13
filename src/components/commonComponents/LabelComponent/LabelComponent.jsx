import React from "react";
import { motion } from "framer-motion";
import "./LabelComponent.css";

export default function LabelComponent({ text }) {
  return <motion.span className="span-text">{text}</motion.span>;
}
