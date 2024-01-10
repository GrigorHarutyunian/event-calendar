import React, { useState } from "react";
import "./Registration.css";
import BackgroundVideoComp from "../commonComponents/BackgroundVideo/BackgroundVideoComp";
import FormComponent from "./FormComponent/FormComponent";
import FormFooterComponent from "../commonComponents/FormFooterComponent/FormFooterComponent";
import UserImageComponent from "./UserImageComponent/UserImageComponent";
import { onChangeHandlerForImageInput } from "../../handlers";
import { motion } from "framer-motion";
export default function Registration() {
  const [image, setImage] = useState(null);
  const uploadImage = onChangeHandlerForImageInput(setImage);

  return (
    <div className="backVideoWithForm">
      <BackgroundVideoComp />
      <motion.div
        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        transition={{
          delay: 1,
          duration: 2,
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
            delay: 0.4,
            duration: 1.2,
            type: "spring",
            stiffness: 100,
          }}
          className="registration-container"
        >
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
