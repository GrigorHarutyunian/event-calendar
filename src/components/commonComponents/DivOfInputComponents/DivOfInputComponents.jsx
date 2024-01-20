import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import "./DivOfInputComponents.css";
import "@fortawesome/fontawesome-free/css/all.css";
import PasswordValidShow from "../PasswordValidShow/PasswordValidShow";

export default function DivOfInputComponents({
  inputArray,
  iId,
  showPasswordValid,
  setShowPasswordValid,
}) {
  // const [lowerValidated, setLowerValidated] = useState(false);
  // const [upperValidated, setUpperValidated] = useState(false);
  // const [numberValidated, setNumberValidated] = useState(false);
  // const [specialValidated, setSpecialValidated] = useState(false);
  // const [lengthValidated, setLengthValidated] = useState(false);
  const passwordParam = inputArray.filter((input) => {
    if (input.type === "password") return true;
    return false;
  });
  const [inputType, setInputType] = useState(passwordParam[0].type);
  const [eyeIconClassName, setEyeIconClassName] = useState(
    "fa-solid fa-eye-slash"
  );

  // const value = inputArray.filter((input) => input.type === "password")[0]
  //   .value;

  // const checkPass = (value) => {
  //   const lower = new RegExp("(?=.*[a-z])");
  //   const upper = new RegExp("(?=.*[A-Z])");
  //   const number = new RegExp("(?=.*[0-9])");
  //   const special = new RegExp("(?=.*[!@#$%^&*])");
  //   const length = new RegExp("(?=.{8,})");

  //   if (!value) {
  //     setShowPasswordValid(false);
  //   }
  //   if (lower.test(value)) {
  //     setLowerValidated(true);
  //   } else {
  //     setLowerValidated(false);
  //   }

  //   if (upper.test(value)) {
  //     setUpperValidated(true);
  //   } else {
  //     setUpperValidated(false);
  //   }

  //   if (number.test(value)) {
  //     setNumberValidated(true);
  //   } else {
  //     setNumberValidated(false);
  //   }

  //   if (special.test(value)) {
  //     setSpecialValidated(true);
  //   } else {
  //     setSpecialValidated(false);
  //   }

  //   if (length.test(value)) {
  //     setLengthValidated(true);
  //   } else {
  //     setLengthValidated(false);
  //   }

  //   if (
  //     length.test(value) &&
  //     lower.test(value) &&
  //     upper.test(value) &&
  //     special.test(value) &&
  //     number.test(value)
  //   ) {
  //     setShowPasswordValid(false);
  //   } else {
  //     setShowPasswordValid(true);
  //   }
  // };

  // useEffect(() => {
  //   checkPass(value);
  // }, [value]);
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
                onFocus={setShowPasswordValid(true)}
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
              {/* <div className="passwordValidShow-container">
                {showPasswordValid ? (
                  <PasswordValidShow
                    lengthValidated={lengthValidated}
                    numberValidated={numberValidated}
                    specialValidated={specialValidated}
                    upperValidated={upperValidated}
                    lowerValidated={lowerValidated}
                  />
                ) : null}
              </div> */}
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
