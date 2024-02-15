import React from "react";
import {
  Hero,
  Business,
  CalendarDeal,
  ContactUs,
  CTAWithFooterContainer,
} from "./index";
import "./Preview.css";
import { StarsBackground } from "./../commonComponents";

export default function Preview() {
  return (
    <div className="">
      <div className="background-stars">
        <StarsBackground />
      </div>
      <div className="preview-container">
        <Hero />
        <Business />
        <CalendarDeal />
        <ContactUs />
        <CTAWithFooterContainer />
      </div>
    </div>
  );
}
