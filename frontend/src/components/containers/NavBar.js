import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { Button } from "antd";
import "./NavBar.css";
import Brand from "../../images/Brand.jpg";
const NavBar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-logo">
        <img src={Brand} alt="logo" />
      </h1>
      <ul className="navbar-options">
        <li className="navbar-option">
          <BsTelephoneFill className="navbar-option-icon" />+ 769 586 4558
        </li>
        <li className="navbar-option">
          <IoIosMail className="navbar-option-icon" />
          service@openauto.ca
        </li>
        <li className="navbar-option">
          <Button className="navbar-option-button" shape="round" size="large">
            Download the mobile app
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
