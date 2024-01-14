import React from "react";
import TimeShowing from "../TimeShowing/TimeShowing";
import LogoComponent from "../LogoComponent/LogoComponent";
import "./Header.css";
import IsLoginComponent from "../IsLogin(Accout)Component/IsLogin(Accout)Component";
export default function Header() {
  return (
    <div className="main-header-container">
      <div className="main-header-logo-container">
        <LogoComponent />
      </div>
      <div className="main-header-time-info-container">
        <TimeShowing />
        <IsLoginComponent />
      </div>
    </div>
  );
}
