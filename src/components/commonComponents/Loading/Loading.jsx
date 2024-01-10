import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = ({ message }) => {
  return (
    <div className="loading-container">
      <Circles
        type="Circles"
        color="#00BFFF"
        heigh={50}
        width={200}
        className="m-5"
      />
      <p className="loading-message">{message}</p>
    </div>
  );
};

export default Loading;
