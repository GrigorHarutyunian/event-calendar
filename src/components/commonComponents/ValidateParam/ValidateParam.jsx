import React from "react";
import "./ValidateParam.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Icon from "react-icons-kit";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";

export default function ValidateParam({ state, title }) {
  return (
    <div className={state ? "validated" : "not-validated"}>
      {state ? (
        <span className="list-icon green">
          <Icon icon={arrows_circle_check} />
        </span>
      ) : (
        <span className="list-icon">
          <Icon icon={arrows_exclamation} />
        </span>
      )}
      {title}
    </div>
  );
}
