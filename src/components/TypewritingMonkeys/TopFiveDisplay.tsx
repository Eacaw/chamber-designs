import { Card } from "antd";
import React from "react";

interface TopFiveDisplayProps {
  data: string[];
}

const TopFiveDisplay: React.FC<TopFiveDisplayProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 0fr 10fr",
          }}
        >
          <div
            key={index + 99}
            style={{
              height: "4em",
              borderRadius: "0.5em",
              backgroundColor: "#f3f3f3",
              border: "3px solid #383838",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {index}
          </div>
          <div></div>
          <div
            key={index - 99}
            style={{
              height: "4em",
              borderRadius: "0.5em",
              backgroundColor: "#f3f3f3",
              border: "3px solid #383838",
              marginBottom: "0.5em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item}
          </div>
        </div>
      ))}
    </>
  );
};

export default TopFiveDisplay;
