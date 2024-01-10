import React, { useEffect, useState } from "react";
import "./Registration.css";
import FormComponent from "./FormComponent/FormComponent";
import UserImageComponent from "./UserImageComponent/UserImageComponent";
import {
  FormFooterComponent,
  LabelComponent,
  BackgroundVideoComp,
} from "../commonComponents";
import { onChangeHandlerForImageInput } from "../../handlers";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const uploadImage = onChangeHandlerForImageInput(setImage);
  const isLoggedIn = localStorage.getItem("loggedIn");
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn]);
  return (
    <div className="backVideoWithForm">
      <BackgroundVideoComp />
      <motion.div
        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        animate={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        transition={{
          delay: 1,
          duration: 3,
        }}
        className="page-container"
      >
        <motion.div
          initial={{
            x: "-40vw",
            y: "-40vw",
            rotateX: 90,
            rotateY: 90,
          }}
          animate={{ x: 0, y: 0, rotateZ: 0, rotateX: 0, rotateY: 0 }}
          transition={{
            delay: 0.9,
            duration: 1.2,
            type: "spring",
            stiffness: 100,
          }}
          className="registration-container"
        >
          <LabelComponent text="Registration" />

          <div className="form-container-reg">
            <UserImageComponent image={image} uploadImage={uploadImage} />
            <FormComponent image={image} />
          </div>
          <FormFooterComponent
            text1="Already have an account  ?"
            text2="Sign in"
            link="/login"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}