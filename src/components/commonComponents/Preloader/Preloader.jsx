import React from "react";
import { useEffect } from "react";
import { preLoaderAnim } from "../../../utils";
import "./Preloader.css";

export default function Preloader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Welcome to</span>
        <span>Calendar</span>
        <span>Website</span>
      </div>
    </div>
  );
}
