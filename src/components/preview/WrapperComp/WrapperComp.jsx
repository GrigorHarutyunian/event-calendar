import React from "react";
import "./WrapperComp.css";
import NavigationDots from "../NavigationDots/NavigationDots.jsx";

const WrapperComp = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div className={`appWrap-container ${classNames}`} id={idName}>
        <div className="component-wrapper-container">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default WrapperComp;
