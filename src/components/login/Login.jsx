import React, { useEffect, useState } from "react";
import "./Login.css";
import {
  BackgroundVideoComp,
  ButtonsComponent,
  FormFooterComponent,
  DivOfInputComponents,
  LabelComponent,
} from "../commonComponents";
import { validateEmail, validatePass } from "../../utils";
import {
  onClickHandlerForEmailFunction,
  onClickHandlerForPasswordFunction,
  onSubmitHandlerForLogin,
} from "../../handlers";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.userIsLogin);
  const [isNotValidEmail, setIsNotValidEmail] = useState(false);
  const [isNotValidPassword, setIsNotValidPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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
    isNotValidPassword,
    navigate,
    dispatch
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

  const loginContainerVariants = {
    hidden: {
      x: "100vw",
      boxShadow: "0px 0px 15px rgb(255, 255, 255)",
      y: "100vw",
      rotate: 360,
    },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.9,
        duration: 1.2,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="login-container">
      <div className="backVideoWithForm">
        <BackgroundVideoComp />
        <motion.div
          initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          animate={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          transition={{
            delay: 1,
            duration: 3,
          }}
          className="form-container-login"
        >
          <motion.form
            variants={loginContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="login-form"
            onSubmit={onSubmitHandler}
          >
            <LabelComponent text="Login" />

            <DivOfInputComponents inputArray={inputArray} />
            <ButtonsComponent
              buttonText="Sign in"
              optionText="Or sign in with"
            />
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
