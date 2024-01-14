import React from "react";
import { useSelector } from "react-redux";
import TimeShowing from "../TimeShowing/TimeShowing";
import LogoComponent from "../LogoComponent/LogoComponent";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import SignInUpButtonsComp from "../SignInUpButtonsComp/SignInUpButtonsComp";

export default function Header() {
  const isLoggedIn = useSelector((store) => store.userIsLogin);
  const navigate = useNavigate();

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
    <div className="main-header-container">
      <div className="main-header-time-container">
        <TimeShowing />
      </div>
      <div className="main-header-logo-info-container">
        <LogoComponent />
        {isLoggedIn ? (
          <div>Account</div>
        ) : (
          <SignInUpButtonsComp buttonsArray={buttonsArray} />
        )}
      </div>
    </div>
  );
}
