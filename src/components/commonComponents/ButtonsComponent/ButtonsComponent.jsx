import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./ButtonsComponent.css";
import { GoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { responsGoogleFunction } from "../../../utils";
import { useDispatch } from "react-redux";
export default function ButtonsComponent({
  buttonText,
  optionText,
  setDoesExistGmail,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responsGoogle = responsGoogleFunction(
    navigate,
    dispatch,
    setDoesExistGmail
  );
  return (
    <div className="buttons">
      <ButtonComponent text={buttonText} type="submit" />
      <span className="orText">{optionText}</span>
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
      >
        <GoogleLogin
          text="signin_with"
          type="icon"
          shape="circle"
          onSuccess={responsGoogle}
          onError={responsGoogle}
        />
      </motion.div>
    </div>
  );
}
