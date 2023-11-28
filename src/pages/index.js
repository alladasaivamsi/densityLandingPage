import * as React from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import DetailBox from "../Components/DetailBox/DetailBox";
import PhoneList from "../Components/PhoneList/PhoneList";
import TradeMoreComponent from "../Components/TradeMoreComponent/TradeMoreComponent";
import ExploreTheMarket from "../Components/ExploreTheMarket/ExploreTheMarket";
import UnlockNewFrontiers from "../Components/UnlockNewFrontiers/UnlockNewFrontiers";
import StartSmall from "../Components/StartSmall/StartSmall";
import DerivatesMadeSimple from "../Components/DerivatesMadeSimple/DerivatesMadeSimple";
import BackedByTheBest from "../Components/BackedByTheBest/BackedByTheBest";
import DonotTakeOurWord from "../Components/DonotTakeOurWord/DonotTakeOurWord";
import EarnMoney from "../Components/EarnMoney/EarnMoney";
import TradeTogether from "../Components/TradeTogether/TradeTogether";
import Visionaries from "../Components/Visionaries/Visionaries";
import GetStartedNow from "../Components/GetStartedNow/GetStartedNow";
import Footer from "../Components/Footer/Footer";
import "../Components/Style/style.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <DetailBox />
      <PhoneList />
      <TradeMoreComponent />
      <ExploreTheMarket />
      <UnlockNewFrontiers />
      <StartSmall />
      <DerivatesMadeSimple />
      <BackedByTheBest />
      <DonotTakeOurWord />
      <EarnMoney />
      <TradeTogether />
      <Visionaries />
      <GetStartedNow />
      <Footer />
    </div>
  );
}
