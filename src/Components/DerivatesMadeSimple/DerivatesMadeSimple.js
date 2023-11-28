import React from "react";
import phone1 from "../../assests/iPhone 14 Pro Space Black Mockup (1).png";
import phone4 from "../../assests/iPhone 14 Pro Space Black Mockup (4).png";
import phone2 from "../../assests/iPhone 14 Pro Space Black Mockup (2).png";
import DerivatesGroup1 from "../../assests/DerivatesGroup1.png";
import Coin from "../../assests/Coin.png";
import TradingPair from "../../assests/Trading Pair.png";
import Vector6 from "../../assests/Vector 6.png";
import {
  Derivates,
  DerivatesHeading,
  DerivatesData,
  DerivatesPhoneImage,
  DerivatesBtn,
  DerivatesText,
} from "../../ComponentStyles/Component.styled.js";

const derivatesData = [
  {
    id: 1,
    image1: phone1,
    image2: DerivatesGroup1,
    headingText: "Create an Account",
    paraText: "Register & Complete your Verification in less than 2 minutes",
    buttonText: "Trade Now",
    Vector6: Vector6,
  },
  {
    id: 2,
    image1: phone4,
    image2: Coin,
    headingText: "Deposit Funds",
    paraText: "Add funds quickly using a variety of payment methods",
    buttonText: "Trade Now",
    Vector6: Vector6,
  },
  {
    id: 3,
    image1: phone2,
    image2: TradingPair,
    headingText: "Become a Trader",
    paraText: "Choose Your Trading Pair & Trade Seamlessly",
    buttonText: "Trade Now",
    Vector6: Vector6,
  },
];

const DerivatesMadeSimple = () => {
  return (
    <Derivates>
      <DerivatesHeading>
        Derivates made simple in <span>3 Easy</span> Steps
      </DerivatesHeading>
      {derivatesData.map((item, index) => {
        return (
          <>
            <DerivatesData>
              <DerivatesPhoneImage>
                <img src={item.image1} alt="phone1" />
              </DerivatesPhoneImage>
              <DerivatesText>
                <img src={item.image2} alt="DerivatesGroup1" />
                <h1>{item.headingText}</h1>
                <p>{item.paraText}</p>
                <DerivatesBtn>{item.buttonText}</DerivatesBtn>
              </DerivatesText>
            </DerivatesData>
            <img src={Vector6} />
          </>
        );
      })}
    </Derivates>
  );
};

export default DerivatesMadeSimple;
