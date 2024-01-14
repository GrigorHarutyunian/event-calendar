import React from "react";
import LoginButtonForHeader from "../LoginButtonForHeader/LoginButtonForHeader";
import "./SignInUpButtonsComp.css";

export default function SignInUpButtonsComp({ buttonsArray }) {
  return (
    <div className="signIn-signUp-buttons-container">
      {buttonsArray.map((button) => (
        <div>
          <LoginButtonForHeader
            onClickHandler={button.onClickHandler}
            text={button.text}
          />
        </div>
      ))}
    </div>
  );
}
