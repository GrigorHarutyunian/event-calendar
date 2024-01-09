import React from "react";
import "./ImageComponent.css";
import User from "../../../assets/User.png";

export default function ImageComponent({ image }) {
  let userImage = image ? image : User;
  return (
    <div className="image-container">
      <img className="image" src={userImage} alt="User Image" />
    </div>
  );
}
