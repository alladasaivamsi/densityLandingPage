import React from "react";
import vector2 from "../../assests/Vector 2.png";
import frontiers from "../../assests/frontiers.png";
import {
  FrontiersVector,
  Frontiers,
} from "../../ComponentStyles/Component.styled.js";

const UnlockNewFrontiers = () => {
  return (
    <Frontiers>
      <h1>
        <span>Unlock</span> New Frontiers.
      </h1>
      <p>
        Are you a stock trader looking for new opportunities to make money? We
        got you covered!
      </p>
      <FrontiersVector>
        <div>
          <h1>Same</h1>
          <h1>Strategies</h1>
        </div>
        <img src={vector2} />
        <div>
          <h1>Same</h1>
          <h1>Indicators</h1>
        </div>
        <img src={vector2} />
        <div>
          <h1>Better</h1>
          <h1>Leverage</h1>
        </div>
        <img src={vector2} />
        <div>
          <h1>24x7</h1>
          <h1>Trading</h1>
        </div>
      </FrontiersVector>
      <img src={frontiers} />
    </Frontiers>
  );
};

export default UnlockNewFrontiers;
