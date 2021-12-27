import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import instagram from "../../../assets/img/instagram.png";
import facebook from "../../../assets/img/facebook.png";
import github from "../../../assets/img/github.png";
import linkedin from "../../../assets/img/linkedin.png";

Social.propTypes = {};

function Social(props) {
  return (
    <div className="social-contact">
      <a href="https://www.instagram.com/nhattin12/">
        <div className="social-icon-div">
          <img src={instagram} className="social-icon" />
        </div>
      </a>
      <a href="https://www.facebook.com/tin.nhat.12979/">
        <div className="social-icon-div">
          <img src={facebook} className="social-icon" />
        </div>
      </a>
      <a href="https://github.com/tinnhat">
        <div className="social-icon-div">
          <img src={github} className="social-icon" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/tin-nguyen-5b0310161/">
        <div className="social-icon-div">
          <img src={linkedin} className="social-icon" />
        </div>
      </a>
    </div>
  );
}

export default Social;
