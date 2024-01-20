import React from "react";
import "./ValidDate.css";

export default function ValidDate({ state, message }) {
  return (
    <>
      {state ? (
        <div className="invalid-text-container">
          <span className="invalid-text">{message}</span>
        </div>
      ) : null}
    </>
  );
}
