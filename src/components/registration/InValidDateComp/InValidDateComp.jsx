import React from "react";
import { ValidDate } from "../../commonComponents";
import "./InValidDateComp.css";

export default function InValidDateComp({ inValidDate, userExistWithEmail }) {
  const validDateArray = [
    {
      state: inValidDate,
      message: "Please enter a valid data!",
    },
    {
      state: userExistWithEmail,
      message: "User with this Email already exist!",
    },
  ];
  return (
    <div>
      {validDateArray.map((validDate) => (
        <ValidDate
          key={validDate.message}
          state={validDate.state}
          message={validDate.message}
        />
      ))}
    </div>
  );
}
