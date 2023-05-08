import React from "react";
import "./header.css";
import Themetoggle from "../toggle-theme";
import phone from "../../assets/Xe-App-iPhones__1_.png";
import lightimage from "../../assets/pietro-piovesan-9UR3Zafm328-unsplash.png";
const Header = () => {
  return (
    <>
      <header className="container">
        <div className="header-left">
          <div className="header-caption">
            <h1>Explore the new way of Sending Money</h1>
          </div>
          <Themetoggle />
          <div className="product-info">
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, accusamus ipsa harum, esse magnam cupiditate
              laboriosam autem velit quaerat libero provident! Consequatur
              maiores quae laborum
            </h4>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, accusamus ipsa harum, esse magnam cupiditate
            </h4>
          </div>
        </div>
        <div className="header-right">
          <div className="image-container">
            <img src={phone} alt="image here" srcSet="" />
          </div>
        </div>
        <div className="background-text">
          <h1>
            Busy <br /> <span className="devstyle">Dev</span>
          </h1>
        </div>
        <div className="light-image">
          <img src={lightimage} alt="img" />
        </div>
      </header>
    </>
  );
};

export default Header;
