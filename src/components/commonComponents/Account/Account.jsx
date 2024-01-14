import React from "react";
import { useSelector } from "react-redux";
import "./Account.css";

export default function Account() {
  const user = useSelector((store) => store.userData);

  return (
    <div className="user-account-container">
      <div className="user-logo-container">
        <img className="user-logo-image" src={user?.image} alt="user" />
      </div>
    </div>
  );
}
