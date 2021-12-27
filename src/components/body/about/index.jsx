import React from "react";
import PropTypes from "prop-types";
import avata from "../../../assets/img/coding.acd987a9.png";
import "./about.scss";
import Social from "../../common/social-contact";
About.propTypes = {};

function About(props) {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br /> <span>Nhat Tin</span>.
          <br /> I love experimenting with the web.
        </div>
        <div className="about-photo">
          <img src={avata} className="picture" />
        </div>
      </div>
      <div className="about-bottom">
        <Social />
      </div>
    </div>
  );
}

export default About;
