import React from "react";
import CoinDCX from "../../../public/assests/CoinDCX.png";
import densityLogo from "../../../public/assests/logo.png";
import DeltaExchange from "../../../public/assests/DeltaExchange.png";
import {
  TradeMore,
  Cards,
  CoinDCXCard,
  DensityCard,
  DensityHeading,
  DensityText,
  Logo,
  TradeHeading,
  TradeText,
} from "../../ComponentStyles/Component.styled.js";

const TradeMoreComponent = () => {
  return (
    <TradeMore>
      <h1>
        Trade More.<span>Pay Less.</span>
      </h1>
      <p>Our low Fees Supercharge Your Profits</p>
      <Cards>
        <CoinDCXCard>
          <img src={CoinDCX} alt="CoinDCX" />
          <div>
            <TradeHeading>0.025</TradeHeading>
            <TradeText>Maker Fees</TradeText>
          </div>
          <div>
            <TradeHeading>0.07</TradeHeading>
            <TradeText>Taker Fees</TradeText>
          </div>
        </CoinDCXCard>
        <DensityCard>
          <Logo>
            <img src={densityLogo} alt="densityLogo" />
            &nbsp;
            <h1>density</h1>
          </Logo>
          <div>
            <DensityHeading>0.02</DensityHeading>
            <DensityText>Maker Fees</DensityText>
          </div>
          <div>
            <DensityHeading>0.04</DensityHeading>
            <DensityText>Taker Fees</DensityText>
          </div>
        </DensityCard>
        <CoinDCXCard>
          <img src={DeltaExchange} alt="DeltaExchange" />
          <div>
            <TradeHeading>0.02</TradeHeading>
            <TradeText>Maker Fees</TradeText>
          </div>
          <div>
            <TradeHeading>0.05</TradeHeading>
            <TradeText>Taker Fees</TradeText>
          </div>
        </CoinDCXCard>
      </Cards>
    </TradeMore>
  );
};

export default TradeMoreComponent;
