import React from "react";
import "./nav.css";
import { BsGooglePlay, BsApple } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <nav className="container">
        <div className="nav-container">
          <div className="menu-list">
            <h4 style={{ fontWeight: "600" }}>home</h4>
            <h4>about</h4>
            <h4>latest</h4>
            <h4>how it works</h4>
            <div className="menu-icon">
              <AiOutlineMenu />
            </div>
          </div>
          <div className="logo">
            <h2>
              Busy<span className="danger">Dev</span>
            </h2>
          </div>
          <div className="app-links">
            <div>
              <h4>
                <BsApple />
                <span>app store</span>
              </h4>
            </div>
            <div>
              <h4>
                <BsGooglePlay />
                <span>google play</span>
              </h4>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
