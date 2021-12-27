import React from "react";
import PropTypes from "prop-types";
import "./home.scss";
import Header from "../header";
import Body from "../body";
import Footer from "../footer";
import "../../main.scss";
Home.propTypes = {};

function Home(props) {
  return (
    <div className="home">
      <Header></Header>
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
