import React from "react";
import vector from "../../assests/Vector 1.png";
import { Vector } from "../../ComponentStyles/Component.styled.js";

const detailBoxData = [
  {
    id: 1,
    headerText: "00%",
    paraText: "Conversion Fee",
    vector: vector,
  },
  {
    id: 2,
    headerText: "500 Mn+",
    paraText: "Lifetime Volume Traded",
    vector: vector,
  },
  {
    id: 3,
    headerText: "250+",
    paraText: "Total Tradable Pairs",
    vector: vector,
  },
  {
    id: 4,
    headerText: "15,000+",
    paraText: "Traders",
    vector: vector,
  },
];

const DetailBox = () => {
  return (
    <Vector>
      {detailBoxData.map((item, index) => {
        return (
          <>
            <div>
              <h1>{item.headerText}</h1>
              <p>{item.paraText}</p>
            </div>
            <img src={vector} />
          </>
        );
      })}
    </Vector>
  );
};

export default DetailBox;
