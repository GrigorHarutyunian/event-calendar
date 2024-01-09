import React from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import ImageInputComponent from "../ImageInputComponent/ImageInputComponent";
import "./UserImageComponent.css";

export default function UserImageComponent({ image, uploadImage }) {
  return (
    <div className="user-container">
      <ImageComponent image={image} />
      <ImageInputComponent uploadImage={uploadImage} />
    </div>
  );
}
