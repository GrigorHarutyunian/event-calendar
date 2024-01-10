import React from "react";
import "./ImageInputComponent.css";
import { motion } from "framer-motion";
export default function ImageInputComponent({ uploadImage }) {
  return (
    <div>
      <motion.label
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255, 255, 255)",
          boxShadow: "0px 0px 15px rgb(255, 0, 0)",
        }}
        transition={{ duration: 0, type: "spring", stiffness: 500 }}
        id="upload-label"
        for="upload-image"
      >
        Upload image
      </motion.label>
      <input
        type="file"
        id="upload-image"
        accept="image/*"
        name="upload-image"
        onChange={uploadImage}
      />
    </div>
  );
}
