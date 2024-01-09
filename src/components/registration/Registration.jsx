import React, { useState } from "react";
import "./Registration.css";
import BackgroundVideoComp from "../commonComponents/BackgroundVideo/BackgroundVideoComp";
import FormComponent from "./FormComponent/FormComponent";
import FormFooterComponent from "../commonComponents/FormFooterComponent/FormFooterComponent";
import UserImageComponent from "./UserImageComponent/UserImageComponent";
import { onChangeHandlerForImageInput } from "../../handlers";

export default function Registration() {
  const [image, setImage] = useState(null);
  const uploadImage = onChangeHandlerForImageInput(setImage);

  return (
    <div className="backVideoWithForm">
      <BackgroundVideoComp />
      <div className="page-container">
        <div className="registration-container">
          <div className="form-container-reg">
            <UserImageComponent image={image} uploadImage={uploadImage} />
            <FormComponent image={image} />
          </div>
          <FormFooterComponent
            text1="Already have an account  ?"
            text2="Sign in"
            link="/login"
          />
        </div>
      </div>
    </div>
  );
}
