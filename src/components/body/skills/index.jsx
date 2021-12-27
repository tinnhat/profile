import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
Skill.propTypes = {};

function Skill(props) {
  return (
    <>
      <div class="separator"></div>
      <label class="section-title">Skills</label>
      <div className="skills-container">
        <div className="skills-section">
          <i class="devicon-html5-plain colored icon-skill"></i>
          <p className="skills-desc">HTML5</p>
        </div>
        <div className="skills-section">
          <i class="devicon-css3-plain colored icon-skill"></i>
          <p className="skills-desc">CSS3</p>
        </div>
        <div className="skills-section">
          <i class="devicon-javascript-plain colored icon-skill"></i>
          <p className="skills-desc">Javascript</p>
        </div>
        <div className="skills-section">
          <i class="devicon-css3-plain colored icon-skill"></i>
          <p className="skills-desc">Bootstrap</p>
        </div>
        <div className="skills-section">
          <i class="devicon-photoshop-plain colored icon-skill"></i>
          <p className="skills-desc">Photoshop</p>
        </div>
        <div className="skills-section">
          <i class="devicon-figma-plain colored icon-skill"></i>
          <p className="skills-desc">Figma</p>
        </div>
        <div className="skills-section">
          <i class="devicon-react-original colored icon-skill"></i>
          <p className="skills-desc">ReactJS</p>
        </div>
      </div>
    </>
  );
}

export default Skill;
