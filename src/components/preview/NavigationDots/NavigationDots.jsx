import React from "react";
import "./NavigationDots.css";

const NavigationDots = ({ active }) => {
  return (
    <div className="app-navigation-container">
      {["hero", "business", "calendarDeal", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app-navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
