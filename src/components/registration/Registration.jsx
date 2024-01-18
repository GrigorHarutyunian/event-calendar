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
import { useSelector } from "react-redux";
import { useIsLoggin } from "../../hooks";

export default function Registration() {
  const [image, setImage] = useState(null);
  const uploadImage = onChangeHandlerForImageInput(setImage);
  const isLoggedIn = useSelector((store) => store.userIsLogin);
  useIsLoggin(isLoggedIn, "/home", isLoggedIn);

  const regContainerVariants = {
    hidden: {
      x: "-100vw",
      y: "-100vw",
      boxShadow: "0px 0px 15px rgb(255, 255, 255)",
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
    exit: {
      x: "-100vw",
      y: "-100vw",
      transition: {
        delay: 0.4,
        duration: 1.2,
        type: "spring",
        stiffness: 100,
      },
    },
  };
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
          variants={regContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
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
