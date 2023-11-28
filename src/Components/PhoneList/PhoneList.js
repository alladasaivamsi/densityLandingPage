import React from "react";
import phone1 from "../../../public/assests/Phone1.png";
import phone2 from "../../../public/assests/Phone2.png";
import phone3 from "../../../public/assests/Phone3.png";
import { PhoneImages } from "../../ComponentStyles/Component.styled.js";

const PhoneList = () => {
  return (
    <PhoneImages>
      <img src={phone1} />
      <img src={phone2} />
      <img src={phone3} />
    </PhoneImages>
  );
};

export default PhoneList;
