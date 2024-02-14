import React from "react";
import "./ImageInputComponent.css";
import { motion } from "framer-motion";
export default function ImageInputComponent({ uploadImage }) {
  return (
    <div>
      <motion.label
        whileHover={{ scale: 1.1 }}
        id="upload-label"
        htmlFor="upload-image"
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
