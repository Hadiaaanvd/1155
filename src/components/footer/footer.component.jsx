import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import FileUpload from "../file-upload/file-upload.component";
import footer from "../../assets/footer.png";

import "./footer.styles.scss";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="section-component">
      <div className="input-containers">
        <h2>Contact Us</h2>
        <div className="roww">
          <input className="field" type="text" placeholder="First Name" />{" "}
          &emsp;
          <input
            className="field company"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="roww">
          <input className="field" type="text" placeholder="Email" /> &emsp;
          <input className="field company" type="text" placeholder="Company" />
        </div>

        <textarea
          rows={5}
          className="field"
          type="text"
          placeholder="What can we help you with?"
        />
        <FileUpload />
        <button className="submit">Submit</button>
      </div>
      <div className="footer-component">
        <div className="logo-container">
          <img
            className="logo"
            onClick={() => navigate("/")}
            src={logo}
            alt=""
          />

          <img
            onClick={() =>
              window.open("https://www.3einfrastructure.com/", "_blank")
            }
            className="logo other"
            src={footer}
            alt=""
          />
        </div>
        <div>
          <span>
            © 2023 1155 INFRASTRUCTURE SOLUTIONS. All Rights Reserved.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
