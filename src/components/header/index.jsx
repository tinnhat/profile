import React, { useState } from "react";
import PropTypes from "prop-types";
import "./header.scss";
import Web from "./web";
import Mobile from "./mobile";
Header.propTypes = {};

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <div className="logo">Overreacted</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={handleOpenMobileMenu}>
            <i class="fi fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
