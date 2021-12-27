import React from "react";
import PropTypes from "prop-types";
import "./work.scss";
import ute from "../../../assets/img/ute.png";
Work.propTypes = {};

function Work(props) {
  return (
    <>
      <div class="separator"></div>
      <label class="section-title">School</label>
      <div className="work-container">
        <div className="work-item">
          <p className="name">
            Ho Chi Minh City University of Technology and Education
          </p>
          <p className="time">07/2017-Present</p>
          <p className="description">Specialized: Computer Network</p>
        </div>
        <img src={ute} alt="" className="logo-ute" />
      </div>
      <label class="section-title">Certificate</label>
      <div className="cer-box">
        <p className="name">JavaScript Algorithms and Data Structures</p>
        <p className="time">2021</p>
        <a
          href="https://www.freecodecamp.org/certification/nhattin99/javascript-algorithms-and-data-structures"
          className="cer-link"
        >
          FreeCodeCamp Javascript
        </a>
      </div>
    </>
  );
}

export default Work;
