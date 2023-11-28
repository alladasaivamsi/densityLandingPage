import React from "react";
import ORIOS from "../../../public/assests/Orios.png";
import INFLECTION from "../../../public/assests/Inflection.png";
import iSeed from "../../../public/assests/iSeed.png";
import perpetual from "../../../public/assests/perpetual.png";
import rise from "../../../public/assests/1947rise.png";
import TribeCapital from "../../../public/assests/TribeCapital.png";
import polygonLabs from "../../../public/assests/polygonLabs.png";
import KarnVivekNagpal from "../../../public/assests/Karn Vivek Nagpal.png";
import SandeepNailawal from "../../../public/assests/Sandeep Nailawal.png";
import UtsavSomani from "../../../public/assests/UtsavSomani.png";
import AdityaNagarsheth from "../../../public/assests/Aditya Nagarsheth.png";
import GokulRajaram from "../../../public/assests/Gokul Rajaram.png";
import SajidRehman from "../../../public/assests/Sajid Rehman.png";
import ArjunSethi from "../../../public/assests/Arjun Sethi.png";
import KunalShah from "../../../public/assests/Kunal Shah.png";

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
