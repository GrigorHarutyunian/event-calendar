import React from "react";
import "./LogoComponent.css";
import { LogoCal, CalLog } from "../../../assets/index";
import { useNavigate } from "react-router-dom";

export default function LogoComponent() {
  const navigate = useNavigate();
  return (
    <div className="header-logo-container" onClick={() => navigate("/")}>
      <img className="header-logo" src={LogoCal} alt="log" />
      <img className="header-web-name" src={CalLog} alt="calendar" />
    </div>
  );
}
