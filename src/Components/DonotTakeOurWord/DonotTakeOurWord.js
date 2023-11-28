import React from "react";
import Frame from "../../assests/Frame.png";
import Prakash from "../../assests/Prakash.png";
import ShambhaviNayak from "../../assests/Shambhavi Nayak.png";
import ArjunNaik from "../../assests/Arjun Naik.png";
import {
  DonotTakeOurWordData,
  DonotTakeOurWordHeading,
  DonotTakeOurWordCards,
  DonotTakeOurWordCard,
  DonotTakeOurWordDetails,
  TextDetails,
  DonotTakeOurWordImage,
} from "../../ComponentStyles/Component.styled.js";

const DonotTakeOurWord = () => {
  return (
    <>
      <DonotTakeOurWordData>
        <DonotTakeOurWordHeading>
          Don't take our word for it.
        </DonotTakeOurWordHeading>
        <p>
          Hear it from our expert community of traders who have made insane
          amounts in a short amount of time
        </p>
      </DonotTakeOurWordData>
      <DonotTakeOurWordCards>
        <DonotTakeOurWordCard>
          <img src={Frame} />
          <DonotTakeOurWordDetails>
            <p>
              As someone who's always looking for the next big thing, I was
              really excited to try out Density’s crypto futures trading
              platform. And I have to say, it definitely lived up to my
              expectations.
            </p>
            <TextDetails>
              <h1>Prakash Jamatia.</h1>
              <p>Founder, Tradeshala</p>
            </TextDetails>
            <DonotTakeOurWordImage>
              <img src={Prakash} alt="Prakash" />
            </DonotTakeOurWordImage>
          </DonotTakeOurWordDetails>
        </DonotTakeOurWordCard>
        <DonotTakeOurWordCard>
          <img src={Frame} />
          <DonotTakeOurWordDetails>
            <p>
              I'm not a seasoned trader, but this website has made it easy for
              me to get started with crypto futures trading. Their KYC was very
              fast and the educational resources were really helpful.
            </p>
            <TextDetails>
              <h1>Shambhavi Nayak.</h1>
              <p>Commodity Trader</p>
            </TextDetails>
            <DonotTakeOurWordImage>
              <img src={ShambhaviNayak} alt="Shambhavi Nayak" />
            </DonotTakeOurWordImage>
          </DonotTakeOurWordDetails>
        </DonotTakeOurWordCard>
        <DonotTakeOurWordCard>
          <img src={Frame} />
          <DonotTakeOurWordDetails>
            <p>
              I've been using this platform for a few months now and it's been a
              great experience. I was delighted to see all the major crypto
              coins listed on Density Exchange.
            </p>
            <TextDetails>
              <h1>Arjun Naik.</h1>
              <p>Equity Trader</p>
            </TextDetails>
            <DonotTakeOurWordImage>
              <img src={ArjunNaik} alt="Prakash" />
            </DonotTakeOurWordImage>
          </DonotTakeOurWordDetails>
        </DonotTakeOurWordCard>
      </DonotTakeOurWordCards>
    </>
  );
};

export default DonotTakeOurWord;
