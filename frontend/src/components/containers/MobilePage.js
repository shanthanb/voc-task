import React from "react";
import mobileapp from "../../images/mobile-app.png";
import "./MobilePage.css";

const MobilePage = () => {
  return (
    <div className="mobile">
      <div className="mobile-img">
        <img className="mobile-img-img" src={mobileapp} alt="mobileapp" />
      </div>

      <div className="mobile-content">
        <h1 className="mobile-content-heading">Focused on Time Saving</h1>
        <p className="mobile-content-subheading">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was
        </p>
        <button className="mobile-content-button">
          Download the mobile app
        </button>
      </div>

      <div className="mobile-img2">
        <img className="mobile-img-img" src={mobileapp} alt="mobileapp" />
      </div>
    </div>
  );
};

export default MobilePage;
