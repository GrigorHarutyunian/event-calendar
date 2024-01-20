import React from "react";
import ValidDate from "../../commonComponents/ValidDate/ValidDate";
import "./InValidDateComp.css";

export default function InValidDateComp({
  inValidDateShow,
  DoesUserExist,
  doesExistGmail,
}) {
  const validDateArray = [
    {
      state: inValidDateShow,
      message: "InValid email or password!",
    },
    {
      state: DoesUserExist,
      message: "User doesn't exist with this email or password!",
    },
    {
      state: doesExistGmail,
      message: "User doesn't exist with this Gmail!",
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
