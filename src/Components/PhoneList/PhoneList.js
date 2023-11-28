import React from "react";
import phone1 from "../../assests/Phone1.png";
import phone2 from "../../assests/Phone2.png";
import phone3 from "../../assests/Phone3.png";
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
