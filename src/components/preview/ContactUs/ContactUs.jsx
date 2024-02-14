import React from "react";
import "./ContactUs.css";
import { motion } from "framer-motion";
import WrapperComp from "../WrapperComp/WrapperComp";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import { onSubmitHandlerForContactUs } from "../../../handlers";

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      email: "",
      textarea: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(9, "Must be more than 9 characters")
        .required("Required"),
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
        <p className="contactUs-paragraf1">Have any questions?</p>
        <p className="contactUs-paragraf2">Contact us</p>
        <form
          id="form"
          onSubmit={formik.handleSubmit}
          className="contactUs-form-container"
        >
          <div className="contactUs-input-container">
            <TextField
              type={"email"}
              fullWidth={true}
              required={true}
              id="email"
              placeholder="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              variant="standard"
            />
          </div>
          <div className="contactUs-textarea-container">
            <textarea
              id="textarea"
              className="contactUs-textarea"
              placeholder="Your Message"
              value={formik.values.textarea}
              name={"message"}
              onChange={formik.handleChange}
            />
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default WrapperComp(ContactUs, "contact");
