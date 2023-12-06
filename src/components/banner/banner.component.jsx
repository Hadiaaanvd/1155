import React from "react";
import video from "../../assets/backvideo.mp4";

import footer from "../../assets/footer.png";

import "./banner.styles.scss";

const Banner = () => {
  return (
    <div className="banner-component">
      <div className="banner-content">
        <h1>INFRASTRUCTURE SOLUTIONS FOR A CHANGING WORLD</h1>
        <p>
          1155 Infrastructure Solutions is a minority-owned, union utility
          infrastructure services company based in Southern California that
          focuses on natural gas pipeline construction. 1155 partners with
          utilities and suppliers to deliver safe and high-quality products and
          services to the communities it serves.
        </p>
      </div>
      <div className="banner-image">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
        <img
          onClick={() =>
            window.open("https://www.3einfrastructure.com/", "_blank")
          }
          className="footer-logo"
          src={footer}
          alt=""
        />
        {/* <img src={play} className="play-btn" alt="" /> */}
      </div>
    </div>
  );
};

export default Banner;
