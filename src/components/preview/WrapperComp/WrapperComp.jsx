import React from "react";
import "./WrapperComp.css";
import { NavigationDots } from "../componetens";

export default AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div className={`app__container ${classNames}`} id={idName}>
        <div className="app__wrapper app__flex ">
          <Component />

          <div className="copyright">
            <p className="p-text">@2023 Karen</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
