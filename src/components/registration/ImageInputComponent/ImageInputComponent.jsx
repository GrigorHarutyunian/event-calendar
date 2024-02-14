import React from "react";
import "./ImageInputComponent.css";
export default function ImageInputComponent({ uploadImage }) {
  return (
    <div>
      <label id="upload-label" htmlFor="upload-image">
        Upload image
      </label>
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
