import React from "react";
import ORIOS from "../../assests/Orios.png";
import INFLECTION from "../../assests/Inflection.png";
import iSeed from "../../assests/iSeed.png";
import perpetual from "../../assests/perpetual.png";
import rise from "../../assests/1947rise.png";
import TribeCapital from "../../assests/TribeCapital.png";
import polygonLabs from "../../assests/polygonLabs.png";
import KarnVivekNagpal from "../../assests/Karn Vivek Nagpal.png";
import SandeepNailawal from "../../assests/Sandeep Nailawal.png";
import UtsavSomani from "../../assests/UtsavSomani.png";
import AdityaNagarsheth from "../../assests/Aditya Nagarsheth.png";
import GokulRajaram from "../../assests/Gokul Rajaram.png";
import SajidRehman from "../../assests/Sajid Rehman.png";
import ArjunSethi from "../../assests/Arjun Sethi.png";
import KunalShah from "../../assests/KunalShah.png";

import {
  BackedByTheBestData,
  BackedHeading,
  ImageLogos,
  Photos,
  Photo,
  Surname,
} from "../../ComponentStyles/Component.styled.js";

const logos = [
  ORIOS,
  INFLECTION,
  iSeed,
  perpetual,
  rise,
  TribeCapital,
  polygonLabs,
];

const photos = [
  { id: 1, name: "Utsav Somani", img: UtsavSomani },
  {
    id: 2,
    name: "Aditya Nagarsheth",
    img: AdityaNagarsheth,
    surName: "Perpetual Value Partners",
  },
  { id: 3, name: "Gokul Rajaram", img: GokulRajaram },
  {
    id: 4,
    name: "Sajid Rehman",
    img: SajidRehman,
    surName: "My Asia VC",
  },
  {
    id: 5,
    name: "Arjun Sethi",
    img: ArjunSethi,
    surName: "Tribe Capital",
  },
  { id: 6, name: "Kunal Shah", img: KunalShah },
  {
    id: 7,
    name: "Sandeep Nailawal",
    img: SandeepNailawal,
    surName: "Polygon Labs",
  },
  { id: 8, name: "Karn Vivek Nagpal", img: KarnVivekNagpal },
];

const BackedByTheBest = () => {
  return (
    <BackedByTheBestData>
      <BackedHeading>Backed by the Best.</BackedHeading>
      <ImageLogos>
        {logos.map((item, index) => {
          return <img src={item} key={index} alt={item} />;
        })}
      </ImageLogos>
      <Photos>
        {photos.map((item, index) => {
          return (
            <Photo>
              <img src={item.img} alt={item.name} key={index} />
              <p>{item.name}</p>
              <Surname>{item.surName}</Surname>
            </Photo>
          );
        })}
      </Photos>
    </BackedByTheBestData>
  );
};

export default BackedByTheBest;
