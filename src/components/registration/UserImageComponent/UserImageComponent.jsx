import React from "react";
import { ImageInputComponent, ImageComponent } from "../index";
import "./UserImageComponent.css";

export default function UserImageComponent({ image, uploadImage }) {
  return (
    <div className="user-container">
      <ImageComponent image={image} />
      <ImageInputComponent uploadImage={uploadImage} />
    </div>
  );
}
