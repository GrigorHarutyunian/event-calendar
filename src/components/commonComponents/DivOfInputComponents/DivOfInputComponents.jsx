import React from "react";
import { TextField } from "@mui/material";
import "./DivOfInputComponents.css";

export default function DivOfInputComponents({ inputArray }) {
  return (
    <>
      {inputArray.map((input) => (
        <div className="input-container">
          <TextField
            value={input.value}
            type={input.type}
            fullWidth="true"
            required="true"
            error={input.error}
            onChange={input.onChange}
            id="standard-basic"
            label={input.label}
            variant="standard"
          />
        </div>
      ))}
    </>
  );
}
