import React, { useState } from "react";
import "./Login.css";
import {
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
import { useIsLoggin } from "../../hooks";
import { InValidDateComp } from "./index";
import { StarsBackground } from "../commonComponents";
export default function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.userIsLogin);
  const [isNotValidEmail, setIsNotValidEmail] = useState(false);
  const [isNotValidPassword, setIsNotValidPassword] = useState(false);

  const [showPasswordValid, setShowPasswordValid] = useState(false);
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);

  const [inValidDateShow, setInValidDateShow] = useState(false);
  const [doesExistGmail, setDoesExistGmail] = useState(false);
  const [DoesUserExist, setDoesUserExist] = useState(false);

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
    setShowPasswordValid,
    setLengthValidated,
    setLowerValidated,
    setNumberValidated,
    setSpecialValidated,
    setUpperValidated,
    setIsNotValidPassword
  );
  const onSubmitHandler = onSubmitHandlerForLogin(
    email,
    password,
    isNotValidEmail,
    isNotValidPassword,
    setInValidDateShow,
    setDoesUserExist,
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
        delay: 0.5,
        duration: 0.7,
        type: "spring",
        stiffness: 40,
      },
    },
    exit: {
      x: "100vw",
      y: "100vw",
      transition: {
        delay: 0.4,
        duration: 1.2,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  useIsLoggin(isLoggedIn, "/home", isLoggedIn);

  return (
    <div className="login-container">
      <div className="backVideoWithForm">
        <StarsBackground />
        <div className="form-container-login">
          <motion.div
            initial={{
              y: "100px",
              boxShadow: "0px 0px 15px rgb(255, 255, 255)",
              opacity: 0,
            }}
            animate={{ y: ["50px", "0px"], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.5 }}
            className="login-container-animation"
          >
            <form className="login-form" onSubmit={onSubmitHandler}>
              <LabelComponent text="Login" />
              <InValidDateComp
                inValidDateShow={inValidDateShow}
                DoesUserExist={DoesUserExist}
                doesExistGmail={doesExistGmail}
              />
              <DivOfInputComponents
                inputArray={inputArray}
                showPasswordValid={showPasswordValid}
                setShowPasswordValid={setShowPasswordValid}
                iId={"i-intup-login"}
                lowerValidated={lowerValidated}
                upperValidated={upperValidated}
                numberValidated={numberValidated}
                specialValidated={specialValidated}
                lengthValidated={lengthValidated}
              />
              <ButtonsComponent
                buttonText="Sign in"
                optionText="Or sign in with"
                setDoesExistGmail={setDoesExistGmail}
              />
              <FormFooterComponent
                text1="Don't have an account"
                text2="Sign up"
                link="/registration"
              />
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
