import React from "react";
import "./SelectComponent.css";
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";

export default function SelectComponent({
  arrayOfOptions,
  title,
  option,
  setOption,
}) {
  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id={title}>{title}</InputLabel>
        <Select
          required={true}
          labelId={title}
          id={title}
          value={option}
          onChange={handleChange}
          label={title}
        >
          {arrayOfOptions?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
