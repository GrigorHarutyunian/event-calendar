import React from "react";
import "./Header.css";
import { IsLoginComponent, LogoComponent } from "../index";
import { BurgerMenu } from "../../home/burger/BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
export default function Header() {
  const dispatch = useDispatch();
  const myLocation = useLocation();

  const calendarForm = useSelector((store) => store.calendarType);
  const userID = useSelector((store) => store.userData.id);
  const day = new Date();
  const isLoggedIn = useSelector((store) => store.userIsLogin);
  return (
    <div className="main-header-container">
      <div className="main-header-logo-container">
        {isLoggedIn && myLocation.pathname === "/home" && <BurgerMenu />}
        <LogoComponent />
      </div>
      <div className="main-header-time-info-container">
        {/* <TimeShowing /> */}
        <IsLoginComponent />
      </div>
    </div>
  );
}
