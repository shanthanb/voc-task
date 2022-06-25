import React from "react";
import SubmitForm from "./SubmitForm";
import "./Description.css";
const Description = () => {
  return (
    <div>
      <div className="desc-leftside">
        <h1 className="desc-leftside-head">
          Vehicle Maintenance From The Comfort of Your Home
        </h1>
        <p className="desc-leftside-subhead">
          Open Auto Soothes the hassle of maintaining your vehicle and helps you
          deal with unexpected repairs worry free.
        </p>
        <SubmitForm />
      </div>
    </div>
  );
};

export default Description;
