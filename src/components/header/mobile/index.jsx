import React from "react";
import PropTypes from "prop-types";
import "./mobile.scss";

Mobile.propTypes = {};

function Mobile(props) {
  const { isOpen, setIsOpen } = props;
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mobile">
      <div className="close-icon" onClick={handleOpen}>
        <i class="fi fi-rr-cross"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <i class="fi fi-rr-edit-alt option-icon"></i>
            Project
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skill">
            <i class="fi fi-rr-laptop option-icon"></i>
            Skill
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i class="fi fi-rr-graduation-cap option-icon"></i>
            Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fi fi-rr-user option-icon"></i>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
