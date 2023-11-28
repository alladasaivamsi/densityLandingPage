import React from "react";
import phone1 from "../../assests/iPhone 14 Pro Space Black Mockup (1).png";
import phone2 from "../../assests/iPhone 14 Pro Space Black Mockup (2).png";
import phone3 from "../../assests/iPhone 14 Pro Space Black Mockup (3).png";
import {
  HeroData,
  HeroHeading,
  HeroText,
  HeroPhones,
  Gradient,
  Phone1,
  Phone2,
  Phone3,
} from "../../ComponentStyles/Component.styled.js";

const Hero = () => {
  return (
    <HeroData>
      <HeroHeading>
        It's time to trade, the <span>future.</span>
      </HeroHeading>
      <HeroText>
        Trade BTC, ETH Futures with 125x leverage and earn rewards.
      </HeroText>
      <HeroPhones>
        <Gradient></Gradient>
        <Phone1>
          <img src={phone1} />
        </Phone1>
        <Phone2>
          <img src={phone2} />
        </Phone2>
        <Phone3>
          <img src={phone3} />
        </Phone3>
      </HeroPhones>
    </HeroData>
  );
};

export default Hero;
