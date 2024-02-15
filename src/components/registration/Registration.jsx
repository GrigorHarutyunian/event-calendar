import React, { useState } from "react";
import "./Registration.css";
import { FormComponent, UserImageComponent, InValidDateComp } from "./index";
import { FormFooterComponent, LabelComponent } from "../commonComponents";
import { StarsBackground } from "../commonComponents";
import { onChangeHandlerForImageInput } from "../../handlers";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useIsLoggin } from "../../hooks";
export default function Registration() {
  const [image, setImage] = useState(null);
  const [inValidDate, setinValideDate] = useState(false);
  const [userExistWithEmail, setUserExistWithEmail] = useState(false);

  const uploadImage = onChangeHandlerForImageInput(setImage);
  const isLoggedIn = useSelector((store) => store.userIsLogin);
  useIsLoggin(isLoggedIn, "/home", isLoggedIn);

  return (
    <div className="backVideoWithForm">
      <StarsBackground />
      <div className="page-container">
        <motion.div
          initial={{
            y: "100px",
            opacity: 0,
            boxShadow: "0px 0px 15px rgb(255, 255, 255)",
          }}
          animate={{ y: ["50px", "0px"], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
          className="reg-container-animation"
        >
          <div className="registration-container">
            <LabelComponent text="Registration" />
            <InValidDateComp
              inValidDate={inValidDate}
              userExistWithEmail={userExistWithEmail}
            />
            <div className="form-container-reg">
              <UserImageComponent image={image} uploadImage={uploadImage} />
              <FormComponent
                image={image}
                setinValideDate={setinValideDate}
                setUserExistWithEmail={setUserExistWithEmail}
              />
            </div>
            <FormFooterComponent
              text1="Already have an account  ?"
              text2="Sign in"
              link="/login"
              setinValideDate={setinValideDate}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
