import React from "react";
import "./IsLogin(Accout)Component.css";
import { useSelector } from "react-redux";
import SignInUpButtonsComp from "../SignInUpButtonsComp/SignInUpButtonsComp";
import { useNavigate } from "react-router-dom";
import Account from "../Account/Account";

export default function IsLoginComponent() {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((store) => store.userIsLogin);
  const buttonsArray = [
    {
      text: "Sign In",
      onClickHandler: () => {
        navigate("/login");
      },
    },
    {
      text: "Sign Up",
      onClickHandler: () => {
        navigate("/registration");
      },
    },
  ];

  return (
    <div>
      {isLoggedIn ? (
        <Account />
      ) : (
        <SignInUpButtonsComp buttonsArray={buttonsArray} />
      )}
    </div>
  );
}
