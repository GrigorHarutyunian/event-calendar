import React from "react";
import "./ValidateParam.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function ValidateParam({ text, checkClassName }) {
  return (
    <li className="li-container">
      <i className={checkClassName}></i>
      <span className="validata-text">{text}</span>
    </li>
  );
}
