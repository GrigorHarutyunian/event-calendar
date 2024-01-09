import React from "react";
import { NavLink } from "react-router-dom";

export default function FormFooterComponent({ text1, text2, link }) {
  return (
    <div>
      <div className="line-with-text">
        <hr className="line" />
        <span className="or-text">{text1}</span>
        <hr className="line" />
      </div>
      <div className="sign-up-container">
        <NavLink to={link}>{text2}</NavLink>
      </div>
    </div>
  );
}
