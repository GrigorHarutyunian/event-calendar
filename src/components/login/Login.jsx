import React, { useState } from "react";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { NavLink, useNavigate } from "react-router-dom";
import BackgroundVideoComp from "../commonComponents/BackgroundVideo/BackgroundVideoComp";
import ButtonComponent from "../commonComponents/ButtonComponent/ButtonComponent";
import { TextField } from "@mui/material";
import validateEmail from "../../utils/emailValidation";
import validatePass from "../../utils/passwordValidation";

export default function Login() {
  const navigate = useNavigate();

  const [isNotValidEmail, setIsNotValidEmail] = useState(true);
  const [isNotValidPassword, setIsNotValidPassword] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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
  const onClickHandlerForEmail = (e) => {
    e.preventDefault();

    setEmail(e.target.value);

    if (validateEmail(e.target.value)) {
      setIsNotValidEmail(false);
    } else {
      setIsNotValidEmail(true);
    }
  };
  const onClickHandlerForPassword = (e) => {
    e.preventDefault();

    setPassword(e.target.value);
    if (validatePass(e.target.value)) {
      setIsNotValidPassword(false);
    } else {
      setIsNotValidPassword(true);
    }
  };
  function onSubmitHandler(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    if (!isNotValidEmail && !isNotValidPassword) {
      // here should be function to send data object to the database or server just
      alert("Send");
    } else {
      alert("not send");
    }
  }

  return (
    <div className="login-container">
      <div className="backVideoWithForm">
        <BackgroundVideoComp />
        <div className="form-container">
          <form className="login-form" onSubmit={onSubmitHandler}>
            <div className="input-container">
              <TextField
                value={email}
                autoComplete
                fullWidth="true"
                required="true"
                color="info"
                error={isNotValidEmail}
                onChange={onClickHandlerForEmail}
                id="standard-basic"
                label="Email"
                variant="standard"
              />
            </div>
            <div className="input-container">
              <TextField
                value={password}
                autoComplete
                fullWidth="true"
                required="true"
                color="info"
                error={isNotValidPassword}
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
