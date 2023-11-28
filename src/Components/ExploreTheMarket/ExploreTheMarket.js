import React from "react";
import market from "../../../public/assests/market.png";
import {
  ExploreTheMarketData,
  ExploreTheMarketHeading1,
  ExploreTheMarketHeading2,
  ExploreMarketsBtn,
} from "../../ComponentStyles/Component.styled.js";

const ExploreTheMarket = () => {
  return (
    <>
      <ExploreTheMarketData>
        <ExploreTheMarketHeading1>Explore the Markets</ExploreTheMarketHeading1>
        <ExploreTheMarketHeading2>
          like it is your <span>Playground.</span>
        </ExploreTheMarketHeading2>
        <p>Search for your favorite coins and stay ahead of the market</p>
        <img src={market} />
        <ExploreMarketsBtn>Explore Markets</ExploreMarketsBtn>
      </ExploreTheMarketData>
    </>
  );
};

export default ExploreTheMarket;
