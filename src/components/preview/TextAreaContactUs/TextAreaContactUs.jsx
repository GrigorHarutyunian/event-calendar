import React from "react";
import "./TextAreaContactUs.css";

export default function TextAreaContactUs({ formik }) {
  return (
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
  );
}
