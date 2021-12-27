import React from "react";
import PropTypes from "prop-types";
import "./body.scss";
import About from "./about";
import Skill from "./skills";
import Work from "./work";
import Contact from "./contact";
import Project from "./project";
Body.propTypes = {};

function Body(props) {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
