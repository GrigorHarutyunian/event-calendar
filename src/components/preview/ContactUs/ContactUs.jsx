import React from "react";
import "./ContactUs.css";
import { motion } from "framer-motion";
import WrapperComp from "../WrapperComp/WrapperComp";
import { useFormik } from "formik";
import * as Yup from "yup";
import { onSubmitHandlerForContactUs } from "../../../handlers";
import SendMessage from "../SendMessage/SendMessage";

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
          <div className="contactUs-input-container">
            <input
              className="contactUs-input"
              type={"email"}
              required={true}
              id="email"
              placeholder="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="contactus-error">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="contactUs-textarea-container">
            <textarea
              required={true}
              id="textareaContact"
              className="textareaContact"
              placeholder="Your Message"
              value={formik.values.textareaContact}
              name={"textareaContact"}
              onChange={formik.handleChange}
            />
            {formik.touched.textareaContact && formik.errors.textareaContact ? (
              <p className="contactus-error">{formik.errors.textareaContact}</p>
            ) : null}
          </div>
          <div className="contactUs-button">
            <SendMessage />
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default WrapperComp(ContactUs, "contact");
