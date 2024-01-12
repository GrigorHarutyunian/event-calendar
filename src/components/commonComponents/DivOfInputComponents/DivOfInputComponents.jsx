import React from "react";
import { TextField } from "@mui/material";
import "./DivOfInputComponents.css";

export default function DivOfInputComponents({ inputArray }) {
  return (
    <>
      {inputArray.map((input) => (
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
      ))}
    </>
  );
}
