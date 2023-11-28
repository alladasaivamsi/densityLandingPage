import React from "react";
import AakashNeerajMittal from "../../../public/assests/Aakash Neeraj Mittal.png";
import DeepakVasman from "../../../public/assests/Deepak Vasman.png";
import ulinkedin from "../../../public/assests/ulinkedin.png";
import BhupendraBule from "../../../public/assests/Bhupendra Bule.png";
import {
  Visionar,
  VisionarCards,
  VisionarCard,
  VisionarDetails,
  LinkedinLogo,
  VisionarImage,
} from "../../ComponentStyles/Component.styled.js";

const Visionaries = () => {
  return (
    <Visionar>
      <h1>
        Meet the <span>Visionaries</span> behind Density.
      </h1>
      <VisionarCards>
        <VisionarCard>
          <VisionarDetails>
            <h1>Aakash Neeraj Mittal</h1>
            <p>CEO,Density</p>
          </VisionarDetails>
          <LinkedinLogo>
            <img src={ulinkedin} alt="linkedin" />
          </LinkedinLogo>
          <VisionarImage>
            <img src={AakashNeerajMittal} alt="Shambhavi Nayak" />
          </VisionarImage>
        </VisionarCard>
        <VisionarCard>
          <VisionarDetails>
            <h1>Bhupendra Bule</h1>
            <p>CTO,Density</p>
          </VisionarDetails>
          <LinkedinLogo>
            <img src={ulinkedin} alt="linkedin" />
          </LinkedinLogo>
          <VisionarImage>
            <img src={BhupendraBule} alt="Bhupendra Bule" />
          </VisionarImage>
        </VisionarCard>
        <VisionarCard>
          <VisionarDetails>
            <h1 className="visionarHeading">Deepak Vasman</h1>
            <p className="visinorText">CBO,Density</p>
          </VisionarDetails>
          <LinkedinLogo>
            <img src={ulinkedin} alt="linkedin" />
          </LinkedinLogo>
          <VisionarImage>
            <img src={DeepakVasman} alt="Deepak Vasman" />
          </VisionarImage>
        </VisionarCard>
      </VisionarCards>
    </Visionar>
  );
};

export default Visionaries;
