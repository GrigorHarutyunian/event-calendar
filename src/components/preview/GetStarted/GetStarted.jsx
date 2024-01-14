import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";
import { ArrowOutward } from "@mui/icons-material";

export default function GetStarted() {
  const navigate = useNavigate();
  return (
    <div
      className="custom-button"
      onClick={() => {
        navigate("/login");
      }}
    >
      <div className="button-container">
        <div className="flex-row">
          <p className="button-text">
            <span className="text-gradient">Get</span>
          </p>
          <ArrowOutward />
        </div>
        <div className="flex-row">
          <p className="button-text">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
}
