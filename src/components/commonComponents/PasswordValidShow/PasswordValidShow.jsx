import React from "react";
import ValidateParam from "../ValidateParam/ValidateParam";
import "./PasswordValidShow.css";

export default function PasswordValidShow({ checkClassName }) {
  const validateParams = [
    {
      title: "At least 8 characters length",
    },
    {
      title: "At least 1 number (0..9)",
    },
    {
      title: "At least 1 lowercase letter (a..z)",
    },
    {
      title: "At least 1 special symbol (!..@)",
    },
    {
      title: "At least 1 uppecase letter (A..Z)",
    },
  ];

  return (
    <div className="content-container">
      <p>Password must contains</p>
      <ul className="requirement-list">
        {validateParams.map((param) => (
          <ValidateParam text={param.title} checkClassName={checkClassName} />
        ))}
      </ul>
    </div>
  );
}
