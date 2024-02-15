import React from "react";
import "./EmailInputContactUs.css";
export default function EmailInputContactUs({ formik }) {
  return (
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
  );
}
