import React from "react";
import Horn from "../../../public/assests/Horn.png";
import EarnMoney1 from "../../../public/assests/EarnMoney1.png";
import EarnMoney2 from "../../../public/assests/EarnMoney2.png";
import EarnMoney3 from "../../../public/assests/EarnMoney3.png";
import Frame from "../../../public/assests/Frame.png";
import {
  EarnMoneyData,
  HornImage,
  EarnMoneyHeading,
  EarnMoneyCards,
  EarnMoneyCard,
  EarnMoneyImage,
  EarnMoneyDetails,
  EarnMoneyBtn,
  StartSmallFrameImage,
} from "../../ComponentStyles/Component.styled.js";

const EarnMoney = () => {
  return (
    <EarnMoneyData>
      <HornImage>
        <img src={Horn} alt="Horn" />
      </HornImage>
      <EarnMoneyHeading>
        Earn Money.<span>The Easy way.</span>
      </EarnMoneyHeading>
      <p>No Complexity of Trading Fee, generate volume and win</p>
      <EarnMoneyCards>
        <EarnMoneyCard>
          <StartSmallFrameImage>
            <img src={Frame} />
          </StartSmallFrameImage>
          <EarnMoneyImage>
            <img src={EarnMoney1} alt="EarnMoney1" />
          </EarnMoneyImage>
          <EarnMoneyDetails>
            <h1>Share your referral link</h1>
          </EarnMoneyDetails>
        </EarnMoneyCard>
        <EarnMoneyCard>
          <StartSmallFrameImage>
            <img src={Frame} />
          </StartSmallFrameImage>
          <EarnMoneyImage>
            <img src={EarnMoney2} alt="EarnMoney2" />
          </EarnMoneyImage>
          <EarnMoneyDetails>
            <h1>Invite Friends to Trade on Density</h1>
          </EarnMoneyDetails>
        </EarnMoneyCard>
        <EarnMoneyCard>
          <StartSmallFrameImage>
            <img src={Frame} />
          </StartSmallFrameImage>
          <EarnMoneyImage>
            <img src={EarnMoney3} alt="EarnMoney3" />
          </EarnMoneyImage>
          <EarnMoneyDetails>
            <h1>Trade and Earn</h1>
          </EarnMoneyDetails>
        </EarnMoneyCard>
      </EarnMoneyCards>
      <EarnMoneyBtn>
        <button>Start Earning Now</button>
      </EarnMoneyBtn>
    </EarnMoneyData>
  );
};

export default EarnMoney;
