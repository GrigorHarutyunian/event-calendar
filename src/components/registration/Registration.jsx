import React from "react";
import "./Registration.css";
import BackgroundVideoComp from "../commonComponents/BackgroundVideo/BackgroundVideoComp";

import FormComponent from "./FormComponent/FormComponent";

export default function Login() {
  return (
    <div className="login-container">
      <div className="backVideoWithForm">
        <BackgroundVideoComp />
        <FormComponent />
      </div>
    </div>
  );
}
