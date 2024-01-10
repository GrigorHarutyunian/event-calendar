import React, { useState } from "react";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import BackgroundVideoComp from "../commonComponents/BackgroundVideo/BackgroundVideoComp";
import ButtonComponent from "../commonComponents/ButtonComponent/ButtonComponent";
import { validateEmail, validatePass } from "../../utils";
import {
  onClickHandlerForEmailFunction,
  onClickHandlerForPasswordFunction,
  onSubmitHandlerForLogin,
} from "../../handlers";
import FormFooterComponent from "../commonComponents/FormFooterComponent/FormFooterComponent";
import { motion } from "framer-motion";
import DivOfInputComponents from "../commonComponents/DivOfInputComponents/DivOfInputComponents";

export default function Login() {
  const [isNotValidEmail, setIsNotValidEmail] = useState(false);
  const [isNotValidPassword, setIsNotValidPassword] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
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
        <motion.div
          initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          transition={{
            delay: 1,
            duration: 2,
          }}
          className="form-container-login"
        >
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
            <motion.span
              initial={{
                x: "100vw",
              }}
              animate={{ x: 0, y: 0, rotateZ: 0, rotateX: 0, rotateY: 0 }}
              transition={{
                delay: 1.4,
                duration: 1.2,
                type: "spring",
                stiffness: 100,
              }}
              className="login-text"
            >
              Login
            </motion.span>

            <DivOfInputComponents inputArray={inputArray} />
            <ButtonComponent buttonText="Sign in" optionText="Or you can use" />
            <FormFooterComponent
              text1="Don't have an account"
              text2="Sign up"
              link="/registration"
            />
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
