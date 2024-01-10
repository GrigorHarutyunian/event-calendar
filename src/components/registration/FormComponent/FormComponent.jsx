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

export default function FormComponent({ image }) {
  const [isNotValidEmail, setIsNotValidEmail] = useState(false);
  const [isNotValidPassword, setIsNotValidPassword] = useState(false);
  const [isNotValidBirthday, setIsNotValidBirthday] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [birthday, setBirthday] = useState(null);
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
