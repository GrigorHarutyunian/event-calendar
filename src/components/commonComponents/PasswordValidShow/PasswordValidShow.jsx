import React from "react";
import { ValidateParam } from "../index";
import "./PasswordValidShow.css";

export default function PasswordValidShow({
  lengthValidated,
  numberValidated,
  specialValidated,
  upperValidated,
  lowerValidated,
}) {
  const validateParams = [
    {
      state: lengthValidated,
      title: "At least 8 characters length",
    },
    {
      state: numberValidated,
      title: "At least 1 number (0..9)",
    },
    {
      state: lowerValidated,
      title: "At least 1 lowercase letter (a..z)",
    },
    {
      state: specialValidated,
      title: "At least 1 special symbol (!..@)",
    },
    {
      state: upperValidated,
      title: "At least 1 uppecase letter (A..Z)",
    },
  ];

  return (
    <div className="tracker-box">
      {validateParams.map((param) => (
        <ValidateParam
          key={param.title}
          title={param.title}
          state={param.state}
        />
      ))}
    </div>
  );
}
