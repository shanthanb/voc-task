import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill, BsInstagram } from "react-icons/bs";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
} from "react-icons/ti";
import "./Footer.css";
import Brand from "../../images/Brand.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-one">
        <h1 className="navbar-logo">
          <img src={Brand} alt="logo" />
        </h1>
        <ul className="footer-options">
          <li className="footer-option">
            <BsTelephoneFill className="footer-option-icon" />+ 769 586 4558
          </li>
          <li className="footer-option">
            <IoIosMail className="footer-option-icon" />
            service@openauto.ca
          </li>
        </ul>
      </div>

      <div className="footer-two">
        <p className="footer-copyright">Open Auto © all rights reserved</p>
        <div className="footer-social-iconss">
          <ul className="footer-section">
            <li className="footer-section-element">Privacy-policy</li>
            <li className="footer-section-element">Terms of use</li>
            <li className="footer-section-element">Cookie policy</li>
          </ul>
          <ul className="media-social-icons">
            <li>
              <TiSocialFacebook className="media-social-icon" />
            </li>
            <li>
              <TiSocialTwitter className="media-social-icon" />
            </li>
            <li>
              <TiSocialYoutube className="media-social-icon" />
            </li>
            <li>
              <TiSocialLinkedin className="media-social-icon" />
            </li>
            <li>
              <BsInstagram className="media-social-icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
