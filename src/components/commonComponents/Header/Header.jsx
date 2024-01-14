import React from "react";
import { useSelector } from "react-redux";
import TimeShowing from "../TimeShowing/TimeShowing";
import LogoComponent from "../LogoComponent/LogoComponent";
import "./Header.css";

export default function Header() {
  const isLoggedIn = useSelector((store) => store.userIsLogin);
  return (
    <div className="main-header-container">
      <div className="main-header-time-container">
        <TimeShowing />
      </div>
      <div className="main-header-logo-info-container">
        <LogoComponent />
        {isLoggedIn ? <div>Accout</div> : <div>Login</div>}
      </div>
    </div>
  );
}
