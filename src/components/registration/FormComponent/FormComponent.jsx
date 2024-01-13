import { useState } from "react";
import "./FormComponent.css";
import { validateEmail, validatePass } from "../../../utils";
import {
  onClickHandlerForEmailFunction,
  onClickHandlerForPasswordFunction,
  onSubmitHandlerForRegistration,
} from "../../../handlers";
import BirthdayDateComponent from "../BirthdayDateComponent/BirthdayDateComponent";
import { ButtonsComponent, DivOfInputComponents } from "../../commonComponents";
import { useNavigate } from "react-router-dom";

export default function FormComponent({ image }) {
  const [isNotValidEmail, setIsNotValidEmail] = useState(false);
  const [isNotValidPassword, setIsNotValidPassword] = useState(false);
  const [isNotValidBirthday, setIsNotValidBirthday] = useState(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
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
    isNotValidBirthday,
    navigate
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
    <form onSubmit={onSubmitHandler}>
      <div className="input-container">
        <DivOfInputComponents inputArray={inputArray} />
        <BirthdayDateComponent
          setBirthday={setBirthday}
          setIsNotValidBirthday={setIsNotValidBirthday}
        />
      </div>
      <ButtonsComponent buttonText="Create" optionText="Or sign up with" />
    </form>
  );
}
