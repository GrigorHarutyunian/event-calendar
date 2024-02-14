import React from "react";
import "./ContactUs.css";
import { motion } from "framer-motion";
import WrapperComp from "../WrapperComp/WrapperComp";
import { useFormik } from "formik";
import * as Yup from "yup";
import { onSubmitHandlerForContactUs } from "../../../handlers";
import SendMessage from "../SendMessage/SendMessage";
import TextAreaContactUs from "../TextAreaContactUs/TextAreaContactUs";
import EmailInputContactUs from "../EmailInputContactUs/EmailInputContactUs";

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      email: "",
      textareaContact: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().min(9, "Email must contain more than 9 characters"),
      textareaContact: Yup.string().min(
        15,
        "Text must contain more than 15 characters"
      ),
    }),
    onSubmit: onSubmitHandlerForContactUs,
  });
  return (
    <div className="preview-contactUs-container-first">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 1.1 }}
        className="preview-contactUs-component"
      >
        <p className="contactUs-paragraf1">Contact us</p>
        <form
          id="formContact"
          onSubmit={formik.handleSubmit}
          className="contactUs-form-container"
        >
          <EmailInputContactUs formik={formik} />
          <TextAreaContactUs formik={formik} />
          <div className="contactUs-button">
            <SendMessage />
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default WrapperComp(ContactUs, "contact");
