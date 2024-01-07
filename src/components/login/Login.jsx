import React, { useState } from "react";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { NavLink, useNavigate } from "react-router-dom";
import BackgroundVideoComp from "../commonComponents/BackgroundVideo/BackgroundVideoComp";
import ButtonComponent from "../commonComponents/ButtonComponent/ButtonComponent";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import { TextField } from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setisValidPassword] = useState(false);

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
  const onClickHandlerForEmail = () => {
    setIsValidEmail(true);
  };
  const onClickHandlerForPassword = () => {
    setisValidPassword(true);
  };
  return (
    <div className="login-container">
      <div className="backVideoWithForm">
        <BackgroundVideoComp />
        <div className="form-container">
          <form className="login-form" onSubmit="">
            <div className="input-container">
              <TextField
                autoComplete
                fullWidth="true"
                required="true"
                color="info"
                error={isValidEmail}
                onChange={onClickHandlerForEmail}
                id="standard-basic"
                label="Email"
                variant="standard"
              />
            </div>
            <div className="input-container">
              <TextField
                autoComplete
                fullWidth="true"
                required="true"
                color="info"
                error={isValidPassword}
                onChange={onClickHandlerForPassword}
                id="standard-basic"
                label="Password"
                variant="standard"
              />
            </div>
            <div className="button-container">
              <ButtonComponent text="Sign in" type="submit" />
              <GoogleLogin
                text="signin_with"
                type="icon"
                shape="circle"
                onSuccess={responsGoogle}
                onError={responsGoogle}
              />
            </div>
            <div className="line-with-text">
              <hr className="line" />
              <span className="or-text">Don't have a account ?</span>
              <hr className="line" />
            </div>
            <div className="sign-up-container">
              <NavLink to="/registration">Sign up</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
