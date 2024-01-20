import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./DivOfInputComponents.css";
import "@fortawesome/fontawesome-free/css/all.css";
import PasswordValidShow from "../PasswordValidShow/PasswordValidShow";

export default function DivOfInputComponents({
  inputArray,
  checkClassName,
  iId,
}) {
  const passwordParam = inputArray.filter((input) => {
    if (input.type === "password") return true;
    return false;
  });
  const [inputType, setInputType] = useState(passwordParam[0].type);
  const [eyeIconClassName, setEyeIconClassName] = useState(
    "fa-solid fa-eye-slash"
  );
  return (
    <>
      {inputArray.map((input) => {
        if (input.type === "password") {
          console.log(inputType);
          return (
            <div
              className="input-container"
              key={`${input.type}-${input.onChange}`}
            >
              <TextField
                value={input.value}
                type={inputType}
                fullWidth={true}
                required={true}
                error={input.error}
                onChange={input.onChange}
                label={input.label}
                variant="standard"
              />
              <i
                className={eyeIconClassName}
                id={iId}
                onClick={() => {
                  setInputType(inputType === "password" ? "text" : "password");
                  setEyeIconClassName(
                    `fa-solid fa-eye${inputType === "password" ? "" : "-slash"}`
                  );
                }}
              ></i>
              <div className="passwordValidShow-container">
                {/* <PasswordValidShow checkClassName={checkClassName} /> */}
              </div>
            </div>
          );
        }
        return (
          <div
            className="input-container"
            key={`${input.type}-${input.onChange}`}
          >
            <TextField
              value={input.value}
              type={input.type}
              fullWidth={true}
              required={true}
              error={input.error}
              onChange={input.onChange}
              label={input.label}
              variant="standard"
            />
          </div>
        );
      })}
    </>
  );
}
