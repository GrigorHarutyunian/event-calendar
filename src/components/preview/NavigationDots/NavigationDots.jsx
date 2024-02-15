import React from "react";
import "./NavigationDots.css";

const NavigationDots = ({ active }) => {
  const arrayOfParts = ["hero", "business", "calendarDeal", "contact"];
  return (
    <div className="app-navigation-container">
      {arrayOfParts.map((item, index) => (
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
