import React from "react";
import "./ButtonComponent.css";

export default function ButtonComponent({ text, type, onClickHandler, form }) {
  return (
    <div>
      <button
        className="button"
        type={type}
        onClick={onClickHandler}
        form={form}
      >
        {text}
      </button>
    </div>
  );
}
