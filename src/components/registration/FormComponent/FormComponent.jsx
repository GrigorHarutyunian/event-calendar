import ButtonComponent from "../../commonComponents/ButtonComponent/ButtonComponent";
import { useState } from "react";
import "./FormComponent.css";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import {
  validateEmail,
  validatePass,
  responsGoogleFunction,
} from "../../../utils";
import {
  onClickHandlerForEmailFunction,
  onClickHandlerForPasswordFunction,
  onSubmitHandlerForRegistration,
} from "../../../handlers";
import BirthdayDateComponent from "../BirthdayDateComponent/BirthdayDateComponent";

export default function FormComponent({ image }) {
  const navigate = useNavigate();
  const [isNotValidEmail, setIsNotValidEmail] = useState(false);
  const [isNotValidPassword, setIsNotValidPassword] = useState(false);
  const [isNotValidBirthday, setIsNotValidBirthday] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [birthday, setBirthday] = useState(null);
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
  const onSubmitHandler = onSubmitHandlerForRegistration(
    email,
    password,
    birthday,
    image,
    isNotValidEmail,
    isNotValidPassword,
    isNotValidBirthday
  );
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="input-container">
        <TextField
          value={email}
          autoComplete
          fullWidth="true"
          required="true"
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
          autoCompleteq
          type={"password"}
          fullWidth="true"
          required="true"
          color="info"
          error={isNotValidPassword}
          onChange={onClickHandlerForPassword}
          id="standard-basic"
          label="Password"
          variant="standard"
        />
        <BirthdayDateComponent setBirthday={setBirthday} />
      </div>
      <div className="button-container">
        <ButtonComponent text="Sign up" type="submit" />
        <GoogleLogin
          text="signin_with"
          type="icon"
          shape="circle"
          onSuccess={responsGoogle}
          onError={responsGoogle}
        />
      </div>
    </form>
  );
}
