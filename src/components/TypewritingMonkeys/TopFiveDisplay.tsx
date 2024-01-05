import React from "react";

interface TopFiveDisplayProps {
  data: string[];
}

const TopFiveDisplay: React.FC<TopFiveDisplayProps> = ({ data }) => {
  return (
    <div
      style={{
        width: "80%",
        borderRadius: "0.5em",
        margin: "auto",
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            height: "4em",
            borderRadius: "0.5em",
            backgroundColor: "#434343",
            border: "3px solid #383838",
            marginBottom: "0.5em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TopFiveDisplay;
