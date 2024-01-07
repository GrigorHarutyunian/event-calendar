import React from "react";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import BackgroundVideoComp from "./BackgroundVideo/BackgroundVideoComp";
export default function Login() {
  const navigate = useNavigate();
  const responsGoogle = (response) => {
    let decodedHeader = jwt_decode(response.credential);
    const { name, sub, picture } = decodedHeader;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    localStorage.setItem("user", JSON.stringify(doc));
    navigate("/home");
  };
  return (
    <div className="login-container">
      <div className="backVideoWithForm">
        <BackgroundVideoComp />
        <div className="form-container">
          <GoogleLogin
            text="signin_with"
            shape="circle"
            onSuccess={responsGoogle}
            onError={responsGoogle}
          />
        </div>
      </div>
    </div>
  );
}
