import { Card } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./tw-components.module.css";
import { DNA } from "../src/DNA";

interface TopFiveDisplayProps {
  data: DNA[];
  target: string;
}

const TopFiveDisplay: React.FC<TopFiveDisplayProps> = ({ data, target }) => {
  const [style, setStyle] = useState([]);

  const updateStyle = useCallback((newStyle) => {
    setStyle(newStyle);
  }, []);

  useEffect(() => {
    const updatedStyle = data.map((item) => {
      let col = item.genes.join("") === target ? "#09bc00" : "red";
      console.log('item.genes.join("") :', item.genes.join(""));
      console.log("target :", target);
      console.log("col :", col);
      return {
        color: col,
      };
    });
    updateStyle(updatedStyle);
  }, [data, updateStyle]);

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
