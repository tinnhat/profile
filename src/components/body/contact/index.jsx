import React from "react";
import PropTypes from "prop-types";
import Social from "../../common/social-contact";
import cv from "../../../assets/NguyenNhatTin-CV.pdf";
import "./style.scss";
Contact.propTypes = {};

function Contact(props) {
  return (
    <>
      <div className="separator"></div>
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-title">
            Want to get in touch? Contact me on any of the platform
          </p>
          <Social />
        </div>
        <a download href={cv} className="cv-down">
          <i className="fi-rr-cloud-download download-icon"></i>
          Download Resume
        </a>
      </div>
    </>
  );
}

export default Contact;
