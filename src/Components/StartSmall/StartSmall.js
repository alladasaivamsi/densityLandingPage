import React from "react";
import Manager from "../../../public/assests/Manager.png";
import Deposit from "../../../public/assests/Deposit.png";
import Frame from "../../../public/assests/Frame.png";
import {
  StartSmallData,
  StartSmallCards,
  ManagerCard,
  StartSmallFrameImage,
  ManagerImage,
  ManagerDetails,
} from "../../ComponentStyles/Component.styled.js";

const StartSmall = () => {
  return (
    <>
      <StartSmallData>
        <h1>Start Small. Earn Big.</h1>
        <p>
          Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
          relationship manager
        </p>
      </StartSmallData>
      <StartSmallCards>
        <ManagerCard>
          <StartSmallFrameImage>
            <img src={Frame} />
          </StartSmallFrameImage>
          <ManagerImage>
            <img src={Deposit} alt="Deposit" />
          </ManagerImage>
          <ManagerDetails>
            <h1>Deposit Bonus.</h1>
            <p>
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </p>
          </ManagerDetails>
        </ManagerCard>
        <ManagerCard>
          <StartSmallFrameImage>
            <img src={Frame} />
          </StartSmallFrameImage>
          <ManagerImage>
            <img src={Manager} alt="Manager" />
          </ManagerImage>
          <ManagerDetails>
            <h1>Dedicated Relationship Manager. </h1>
            <p>
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </p>
          </ManagerDetails>
        </ManagerCard>
      </StartSmallCards>
    </>
  );
};

export default StartSmall;
