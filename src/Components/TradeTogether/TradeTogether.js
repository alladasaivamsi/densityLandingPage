import React from "react";
import vector1 from "../../../public/assests/Vector 1.png";
import {
  TradeTogetherBtn,
  TradeTogetherText,
  TradeTogetherVector,
} from "../../ComponentStyles/Component.styled.js";

const TradeTogether = () => {
  return (
    <>
      <TradeTogetherText>
        <h1>
          Trade Together.<span>Thrive Together.</span>
        </h1>
        <p>Join the fun-filled community on our platform.</p>
        <TradeTogetherVector>
          <div>
            <h1>10,000+</h1>
            <p>Traders</p>
          </div>
          <img src={vector1} />
          <div>
            <h1>100Mn</h1>
            <p>Daily Volume Traded</p>
          </div>
          <img src={vector1} />
          <div>
            <h1>Daily</h1>
            <p>Trade Analysis</p>
          </div>
          <img src={vector1} />
          <div>
            <h1>Live</h1>
            <p>Signals</p>
          </div>
        </TradeTogetherVector>
        <TradeTogetherBtn>Join Community</TradeTogetherBtn>
      </TradeTogetherText>
    </>
  );
};

export default TradeTogether;
