import React from "react";
import PropTypes from "prop-types";
import "./web.scss";

Web.propTypes = {};

function Web(props) {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i class="fi fi-rr-edit-alt option-icon"></i>
          Project
        </a>
      </div>
      <div className="web-option">
        <a href="#skill">
          <i class="fi fi-rr-laptop option-icon"></i>
          Skill
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi fi-rr-graduation-cap option-icon"></i>
          Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi fi-rr-user option-icon"></i>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
