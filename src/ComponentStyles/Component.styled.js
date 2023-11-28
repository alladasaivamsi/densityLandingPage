import styled from "styled-components";

// Header
export const HeaderData = styled.div`
  min-width: 1200px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
  background-color: black;
  width: 100vw;
  border-bottom: 1px solid rgba(226, 255, 111, 0.3);
  z-index: 100;
`;

export const DensityLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;

  img {
    width: 60px;
    height: 70px;
  }

  h1 {
    color: rgba(226, 255, 111, 1);
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  p {
    color: white;
    cursor: pointer;
  }

  p:hover {
    color: rgba(226, 255, 111, 1);
  }

  button {
    font-weight: 700;
    font-size: 16px;
    background: linear-gradient(90deg, rgb(212, 249, 56), rgb(50, 216, 117));
    padding: 1rem 2rem;
    border-radius: 0.5em;
    cursor: pointer;
    border: none;
    color: black;
    box-shadow: 0 0 10px rgba(226, 255, 111, 1);
  }
`;
// End Of Header

// Hero
export const HeroData = styled.div`
  min-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 10em;
`;

export const HeroHeading = styled.div`
  font-weight: 700;
  font-size: 6em;
  line-height: 1.2em;
  text-align: center;
  height: 200px;
  width: 70%;
  margin-bottom: 2rem;

  span {
    font-weight: 700;
    color: rgba(226, 255, 111, 1);
    text-shadow: 0 0 50px rgba(226, 255, 111, 1);
  }
`;

export const HeroText = styled.div`
  text-transform: capitalize;
  font-size: 2rem;
`;

export const HeroPhones = styled.div`
  margin: 4rem;
  position: relative;
  background: transparent;
  width: 13%;
  height: 40em;
`;

export const Gradient = styled.div`
  position: absolute;
  width: 800px;
  height: 500px;
  background: rgba(226, 255, 111, 0.7);
  filter: blur(100px);
  top: 8em;
  left: -18em;
`;

export const Phone1 = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: -2em;
  background: transparent;

  img {
    background: transparent;
  }
`;

export const Phone2 = styled.div`
  position: absolute;
  z-index: 0;
  top: 5em;
  left: 17em;
  background: transparent;
  img {
    background: transparent;
  }
`;

export const Phone3 = styled.div`
  position: absolute;
  z-index: 0;
  top: 5em;
  left: -17em;
  background: transparent;
  img {
    background: transparent;
  }
`;
// End Of Hero

export const BackedByTheBestData = styled.div`
  min-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BackedHeading = styled.div`
  font-size: 3em;
  font-weight: 700;
  text-align: center;
`;

export const ImageLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem;
  margin: 4rem 8rem;
`;

export const Photos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem;
  margin: 4rem 10rem;
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Surname = styled.div`
  color: grey;
`;

export const Derivates = styled.div`
  min-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin: 5rem 0;
`;

export const DerivatesHeading = styled.div`
  font-size: 3em;
  font-weight: 700;
  width: 45%;
  text-align: center;

  span {
    font-weight: 700;
    color: yellow;
  }
`;

export const DerivatesData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20rem;
  margin-bottom: 3rem;
`;

export const DerivatesPhoneImage = styled.div`
  img {
    height: 30em;
    margin-top: 5rem;
  }
`;
export const DerivatesBtn = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  background: linear-gradient(90deg, rgb(212, 249, 56), rgb(50, 216, 117));
  padding: 1rem 2rem;
  border-radius: 0.5em;
  cursor: pointer;
  border: none;
  color: black;
  box-shadow: 0 0 10px rgba(226, 255, 111, 1);
`;

export const DerivatesText = styled.div`
  img {
    width: 6rem;
    padding-bottom: 1rem;
  }

  p {
    padding: 1rem 0;
    color: grey;
    width: 80%;
  }
`;

export const Vector = styled.div`
  min-width: 1100px;
  width: 80%;
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 0 10px rgba(226, 255, 111, 1);
  border: none;
  border-radius: 10px;
  margin: 5rem 10%;
  padding: 0rem 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  div > h1 {
    color: rgba(235, 255, 37, 1);
    font-size: 3em;
  }

  img {
    height: 10rem;
    width: 0.5rem;
  }

  div > p {
    color: grey;
  }
`;

export const DonotTakeOurWordData = styled.div`
  min-width: 1200px;
  background-color: #fff !important;
  color: black !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem 0 0;

  p {
    background-color: #fff !important;
    color: black !important;
    font-size: 1.2rem;
    margin: 0 10rem 2rem;
    text-align: center;
  }
`;

export const DonotTakeOurWordHeading = styled.div`
  background-color: #fff !important;
  color: black !important;
  font-size: 4em !important;
  font-weight: 700;
`;

export const DonotTakeOurWordCards = styled.div`
  min-width: 1200px;
  width: 100%;
  background-color: #fff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
  padding-bottom: 6rem;
`;

export const DonotTakeOurWordCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  width: 20em;
  height: 20em;
  background: lightgray;
  padding: 1rem;

  img {
    position: absolute;
    background: transparent;
    width: 10rem;
    top: 0;
    right: 0;
    z-index: 1;
  }
`;

export const DonotTakeOurWordDetails = styled.div`
  background-color: lightgray;
  text-align: start;

  p {
    background-color: lightgray !important;
    color: black;
    font-size: 1rem;
    text-align: start;
    line-height: 1.5rem;
  }
`;

export const TextDetails = styled.div`
  background-color: lightgray;
  text-align: start;

  p {
    background-color: lightgray !important;
    color: black;
  }

  h1 {
    margin-top: 2rem;
    background-color: lightgray !important;
    color: black;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

export const DonotTakeOurWordImage = styled.span`
  position: absolute;
  bottom: 7.7em;
  right: 0rem;
  z-index: 1;
  img {
    width: 7rem;
    z-index: 1;
    background: transparent;
  }
`;

export const EarnMoneyData = styled.div`
  min-width: 1150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  margin-top: 5rem;
  padding-bottom: 5em;

  p {
    font-size: 1.2rem;
    color: grey;
    text-align: center;
  }
`;

export const HornImage = styled.div`
  img {
    width: 10em;
  }
`;

export const EarnMoneyHeading = styled.div`
  font-size: 4em;
  font-weight: 700;

  span {
    font-weight: 700;
    color: yellow;
  }
`;

export const EarnMoneyCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const EarnMoneyCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 15em;
  height: 15em;
  background: rgba(25, 25, 29, 1);
  padding: 1rem;
`;

export const StartSmallFrame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  width: 15em;
  height: 15em;
  background: rgba(25, 25, 29, 1);
  padding: 1rem;
`;

export const EarnMoneyImage = styled.span`
  img {
    position: absolute;
    background: transparent;
    top: 2rem;
    left: 2rem;
    width: 5rem;
    z-index: 1;
  }
`;

export const EarnMoneyDetails = styled.div`
  h1 {
    background: rgba(25, 25, 29, 1);
    padding-top: 8rem;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

export const EarnMoneyBtn = styled.span`
  button {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    background: linear-gradient(90deg, rgb(212, 249, 56), rgb(50, 216, 117));
    padding: 1rem 2rem;
    border-radius: 0.5em;
    cursor: pointer;
    border: none;
    color: black;
    box-shadow: 0 0 10px rgba(226, 255, 111, 1);
  }
`;

export const ExploreTheMarketData = styled.div`
  min-width: 1150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin: 5rem 0;

  img {
    margin: 2rem;
  }
`;

export const ExploreTheMarketHeading1 = styled.div`
  font-size: 3em;
  font-weight: 700;
`;

export const ExploreTheMarketHeading2 = styled.div`
  font-size: 3em;
  font-weight: 700;

  span {
    font-weight: 700;
    color: yellow;
  }
`;

export const ExploreMarketsBtn = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  background: linear-gradient(90deg, rgb(212, 249, 56), rgb(50, 216, 117));
  padding: 1rem 2rem;
  border-radius: 0.5em;
  cursor: pointer;
  border: none;
  color: black;
  box-shadow: 0 0 10px rgba(226, 255, 111, 1);
`;

export const FooterData = styled.div`
  min-width: 1200px;
  padding: 2rem;
  background: rgba(34, 152, 81, 1) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;

  p {
    background-color: rgba(34, 152, 81, 1) !important;
    font-size: 1.5rem;
    text-align: center;
    padding: 0 2rem;
  }
`;

export const FooterLogo = styled.div`
  background-color: transparent !important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  img {
    background-color: rgba(34, 152, 81, 1);
    height: 2rem;
  }

  h1 {
    background: transparent;
    color: white !important;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  background-color: rgba(34, 152, 81, 1) !important;

  p {
    background-color: rgba(34, 152, 81, 1) !important;
    font-size: 1.5rem;
    cursor: pointer;
  }

  p:hover {
    color: black;
  }
`;

export const FooterLogos = styled.div`
  background-color: rgba(34, 152, 81, 1) !important;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;
`;

export const GetStartedNowData = styled.div`
  min-width: 1150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin: 10rem 0;
  height: 45em;

  h1 {
    position: absolute;
    top: 0em;
    text-align: center;
    font-size: 6em;
    font-weight: 700;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 0;
  }

  img {
    position: absolute;
    top: 4em;
    height: 50em;
    z-index: 1;
    background: transparent;
  }

  button {
    position: absolute;
    top: 48em;
    z-index: 2;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    background: linear-gradient(90deg, rgb(212, 249, 56), rgb(50, 216, 117));
    padding: 1rem 2rem;
    cursor: pointer;
    border: none;
    color: black;
    box-shadow: 0 0 10px rgba(226, 255, 111, 1);
    width: 50%;
  }
`;

export const PhoneImages = styled.div`
  min-width: 1150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5em;
`;

export const StartSmallData = styled.div`
  min-width: 1150px;
  background-color: #fff !important;
  color: black !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem 0 0;

  h1 {
    background-color: #fff !important;
    color: black !important;
    font-size: 3em;
    font-weight: 700;
  }

  p {
    background-color: #fff !important;
    color: black !important;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const StartSmallCards = styled.div`
  min-width: 1150px;
  background-color: #fff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
  padding-bottom: 6rem;
`;

export const ManagerCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25em;
  height: 20em;
  background: lightgray;
  padding: 1rem;
`;

export const ManagerImage = styled.span`
  img {
    position: absolute;
    background: transparent;
    top: 2rem;
    left: 2rem;
    width: 7rem;
    z-index: 1;
  }
`;

export const ManagerDetails = styled.div`
  background-color: lightgray;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;

  p {
    background-color: lightgray !important;
    color: black;
    font-size: 1rem;
  }

  h1 {
    margin-top: 2rem;
    background-color: lightgray;
    color: black;
    font-weight: 700;
    font-size: 2.1rem;
  }
`;

export const StartSmallFrameImage = styled.span`
  img {
    position: absolute;
    background: transparent;
    width: 10rem;
    top: 0;
    right: 0;
    z-index: 1;
  }
`;

export const TradeMore = styled.div`
  min-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin: 5rem 0;

  h1 {
    font-size: 3em;
    font-weight: 700;
  }

  h1 span {
    font-weight: 700;
    color: yellow;
  }

  p {
    font-size: 1.2rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

export const CoinDCXCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  width: 16em;
  height: 20em;
  background: rgba(25, 25, 29, 1);

  img {
    background: transparent;
    width: 8rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    background: rgba(25, 25, 29, 1);
  }
`;

export const DensityCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  width: 16em;
  height: 20em;
  background: rgba(226, 255, 111, 0.9);
  box-shadow: 0 0 30px rgba(226, 255, 111, 1);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  background: transparent;

  img {
    background: transparent;
    height: 2rem;
  }

  h1 {
    background: transparent !important;
    color: black !important;
  }
`;

export const TradeHeading = styled.div`
  font-size: 2rem;
  background: rgba(25, 25, 29, 1);
  font-weight: 600;
  text-align: center;
`;

export const TradeText = styled.div`
  background: rgba(25, 25, 29, 1);
  color: grey;
  text-align: center;
`;

export const DensityHeading = styled.div`
  font-size: 2rem;
  background: rgba(226, 255, 111, 0.9) !important;
  color: black;
  font-weight: 600;
  text-align: center;
`;

export const DensityText = styled.div`
  background: rgba(226, 255, 111, 0.9) !important;
  color: black;
  text-align: center;
`;

export const TradeTogetherText = styled.div`
  min-width: 1150px;
  background-image: url("../../../public//assests/backgroundImage.png");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  flex-direction: column;
  padding: 5em;

  h1 {
    background: transparent;
    font-size: 4em;
    font-weight: 700;
  }

  p {
    background: transparent;
    font-size: 1.2rem;
    text-align: center;
  }

  h1 span {
    background: transparent;
    font-weight: 700;
    color: yellow;
  }
`;

export const TradeTogetherVector = styled.div`
  width: 80%;
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border: none;
  border-radius: 10px;
  margin: 5rem 10%;
  padding: 0rem 2rem;
  background: rgba(16, 16, 16, 0.5);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    background: transparent;
  }

  div h1 {
    background: transparent;
    font-style: 4em;
  }

  img {
    height: 7rem;
  }

  p {
    color: grey;
    background: transparent;
    font-size: 1rem;
  }
`;

export const TradeTogetherBtn = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  background: linear-gradient(90deg, rgb(212, 249, 56), rgb(50, 216, 117));
  padding: 1rem 2rem;
  border-radius: 0.5em;
  cursor: pointer;
  border: none;
  color: black;
  box-shadow: 0 0 10px rgba(226, 255, 111, 1);
`;

export const Frontiers = styled.div`
  min-width: 1150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin: 5rem 0;

  p {
    font-size: 1.4rem;
    width: 50%;
    text-align: center;
  }

  h1 {
    font-size: 3em;
    font-weight: 700;
  }

  h1 span {
    font-weight: 700;
    color: yellow;
  }
`;

export const FrontiersVector = styled.div`
  width: 80%;
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 0 10px grey;
  border: none;
  border-radius: 10px;
  margin: 5rem 10%;
  padding: 0rem 2rem;

  div > h1 {
    font-style: 4em;
  }
`;

export const Visionar = styled.div`
  min-width: 1150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin: 5rem 0;

  h1 {
    font-size: 3em;
    font-weight: 700;
    width: 40%;
    text-align: center;
  }

  h1 span {
    font-weight: 700;
    color: yellow;
  }
`;

export const VisionarImage = styled.span`
  img {
    background: transparent;
    position: absolute;
    bottom: 0rem;
    right: 0rem;
    height: 12rem;
    z-index: 1;
  }
`;

export const VisionarCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const VisionarDetails = styled.div`
  background: rgba(25, 25, 29, 1) !important;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.8em;
  top: 2em;
  left: 2em;

  p {
    background: rgba(25, 25, 29, 1) !important;
    color: grey;
  }

  h1 {
    font-size: 3em;
    font-weight: 700;
    width: 40%;
    text-align: center;
    background: rgba(25, 25, 29, 1) !important;
  }
`;

export const VisionarCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem;
  width: 20em;
  height: 20em;
  background: rgba(25, 25, 29, 1);
`;

export const LinkedinLogo = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  cursor: pointer;
`;
