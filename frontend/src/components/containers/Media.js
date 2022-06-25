import React from "react";
import Description from "./Description";
import View from "./View";
import scroll from "../../images/scroll.jpg";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
} from "react-icons/ti";
import "./Media.css";
import { BsInstagram } from "react-icons/bs";

const Media = () => {
  return (
    <div className="media">
      <Description />
      <View />
      <div className="media-logo-bottom">
        <img className="media-logo-img" src={scroll} alt="" />
        <div className="social-icons">
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

export default Media;
