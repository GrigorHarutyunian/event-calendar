import React, { useState } from "react";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import { NavLink, useNavigate } from "react-router-dom";
import BackgroundVideoComp from "../commonComponents/BackgroundVideo/BackgroundVideoComp";
import ButtonComponent from "../commonComponents/ButtonComponent/ButtonComponent";
import { TextField } from "@mui/material";
import {
  validateEmail,
  validatePass,
  responsGoogleFunction,
} from "../../utils";
import {
  onClickHandlerForEmailFunction,
  onClickHandlerForPasswordFunction,
  onSubmitHandlerForLogin,
} from "../../handlers";
export default function Login() {
  const navigate = useNavigate();

  const [isNotValidEmail, setIsNotValidEmail] = useState(true);
  const [isNotValidPassword, setIsNotValidPassword] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const responsGoogle = responsGoogleFunction(navigate);
  const onClickHandlerForEmail = onClickHandlerForEmailFunction(
    setEmail,
    validateEmail,
    setIsNotValidEmail
  );

  const onClickHandlerForPassword = onClickHandlerForPasswordFunction(
    setPassword,
    validatePass,
    setIsNotValidPassword
  );
  const onSubmitHandler = onSubmitHandlerForLogin(
    email,
    password,
    isNotValidEmail,
    isNotValidPassword
  );
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
