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
import FormFooterComponent from "../../commonComponents/FormFooterComponent/FormFooterComponent";

export default function FormComponent() {
  const navigate = useNavigate();
  const [isNotValidEmail, setIsNotValidEmail] = useState(false);
  const [isNotValidPassword, setIsNotValidPassword] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [image, setImage] = useState(null);
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
  const uploadImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    // You can also perform additional tasks, such as displaying a preview of the image
    // For example, you can use the FileReader API to read the image and set it as a preview
    const reader = new FileReader();
    reader.onloadend = () => {
      // Do something with the preview, like updating another state variable
      // setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
    console.log(file);
  };
  const onSubmitHandler = onSubmitHandlerForRegistration(
    email,
    password,
    image,
    isNotValidEmail,
    isNotValidPassword
  );
  return (
    <div className="form-container">
      <form className="reg-form" onSubmit={onSubmitHandler}>
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
        </div>
        <div>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            name="upload-image"
            onChange={uploadImage}
          />
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
        <FormFooterComponent
          text1="Already have an account"
          text2="Sign in"
          link="/login"
        />
      </form>
    </div>
  );
}
