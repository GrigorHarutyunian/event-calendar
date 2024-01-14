import React from "react";
import SignInSignUpButton from "../SignInSignUpButton/SignInSignUpButton";
import "./SignInUpButtonsComp.css";

export default function SignInUpButtonsComp({ buttonsArray }) {
  return (
    <div className="signIn-signUp-buttons-container">
      {buttonsArray.map((button) => (
        <div key={`${button.text}-${button.text}`}>
          <SignInSignUpButton
            onClickHandler={button.onClickHandler}
            text={button.text}
          />
        </div>
      ))}
    </div>
  );
}
