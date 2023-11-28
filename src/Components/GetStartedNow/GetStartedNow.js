import React from "react";
import phone5 from "../../../public/assests/phone5.png";
import { GetStartedNowData } from "../../ComponentStyles/Component.styled.js";

const GetStartedNow = () => {
  return (
    <GetStartedNowData>
      <h1>Get started now</h1>
      <img src={phone5} alt="phone5" />
      <button>Start Trading</button>
    </GetStartedNowData>
  );
};

export default GetStartedNow;
