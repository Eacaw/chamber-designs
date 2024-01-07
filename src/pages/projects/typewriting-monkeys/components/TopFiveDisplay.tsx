import { Card } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./tw-components.module.css";
import { DNA } from "../src/DNA";

interface TopFiveDisplayProps {
  data: DNA[];
  target: string;
}

const TopFiveDisplay: React.FC<TopFiveDisplayProps> = ({ data, target }) => {
  const targetPhrase = target;
  const [style, setStyle] = useState([]);

  useEffect(() => {
    const updatedStyle = data.map((item) => {
      let col = item.genes.join("") === targetPhrase ? "#09bc00" : "red";
      return {
        color: col,
      };
    });
    setStyle(updatedStyle);
  }, [data]);

  return (
    <>
      {data.map((i, index) => (
        <Card style={{ borderRadius: "0.5em", ...style[index] }}>
          <div className={styles.topFiveTablet}>
            <div className={styles.fitnessColumn}>
              <span>Fitness:</span>
              <h2>{Math.round(i.fitness * 100)}%</h2>
            </div>
            <div></div>
            {i.genes}
          </div>
        </Card>
      ))}
    </>
  );
};

export default TopFiveDisplay;
