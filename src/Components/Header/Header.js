import React, { useState } from "react";
import logo from "../../assests/density-logo.jpeg";
import {
  HeaderData,
  DensityLogo,
  HeaderLinks,
} from "../../ComponentStyles/Component.styled.js";

const Header = () => {
  return (
    <>
      <HeaderData>
        <DensityLogo>
          <img src={logo} alt="logo" />
          <h1>density</h1>
        </DensityLogo>
        <HeaderLinks>
          <p>Career</p>
          <p>Blogs</p>
          <p>Leaderboard</p>
          <p>Fees</p>
          <button>TRADE NOW</button>
        </HeaderLinks>
      </HeaderData>
    </>
  );
};

export default Header;
