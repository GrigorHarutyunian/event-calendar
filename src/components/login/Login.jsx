import React, { useState } from "react";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import BackgroundVideoComp from "../commonComponents/BackgroundVideo/BackgroundVideoComp";
import ButtonComponent from "../commonComponents/ButtonComponent/ButtonComponent";
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
import FormFooterComponent from "../commonComponents/FormFooterComponent/FormFooterComponent";
import { motion } from "framer-motion";
import DivOfInputComponents from "../commonComponents/DivOfInputComponents/DivOfInputComponents";

export default function Login() {
  const navigate = useNavigate();

  const [isNotValidEmail, setIsNotValidEmail] = useState(false);
  const [isNotValidPassword, setIsNotValidPassword] = useState(false);
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
  const inputArray = [
    {
      value: email,
      type: "email",
      error: isNotValidEmail,
      onChange: onClickHandlerForEmail,
      label: "Email",
    },
    {
      value: password,
      type: "password",
      error: isNotValidPassword,
      onChange: onClickHandlerForPassword,
      label: "Password",
    },
  ];
  return (
    <div className="login-container">
      <div className="backVideoWithForm">
        <BackgroundVideoComp />
        <div className="form-container-login">
          <motion.form
            initial={{
              x: "40vw",
              y: "40vw",
              rotateX: 90,
              rotateY: 90,
            }}
            animate={{ x: 0, y: 0, rotateZ: 0, rotateX: 0, rotateY: 0 }}
            transition={{
              delay: 0.4,
              duration: 1.2,
              type: "spring",
              stiffness: 100,
            }}
            className="login-form"
            onSubmit={onSubmitHandler}
          >
            <DivOfInputComponents inputArray={inputArray} />
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
            <FormFooterComponent
              text1="Don't have an account"
              text2="Sign up"
              link="/registration"
            />
          </motion.form>
        </div>
      </div>
    </div>
  );
}
