import React from "react";
import "./ImageComponent.css";
import { UserImage } from "../../../assets/";

export default function ImageComponent({ image }) {
  let userImage = image ? image : UserImage;
  return (
    <div className="image-container">
      <img className="image" src={userImage} alt="User Image" />
    </div>
  );
}
