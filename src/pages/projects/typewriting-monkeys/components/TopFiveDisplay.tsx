import { Badge, Card } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import styles from "..tw-monkeys.module.css";
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
      return {
        color: col,
      };
    });
    updateStyle(updatedStyle);
  }, [data, updateStyle]);

  return (
    <>
      <Badge.Ribbon text="#1 Top genes" color="green">
        <Card style={{ borderRadius: "0.5em", ...style[0] }}>
          <div className={styles.topFiveTablet}>
            <div className={styles.fitnessColumn}>
              <span>Fitness:</span>
              <h2>{Math.round(data[0].fitness * 100)}%</h2>
            </div>
            <div></div>
            {data[0].genes}
          </div>
        </Card>
      </Badge.Ribbon>
      <div className={styles.fitnessCard}>
        {data.map((i, index) => {
          if (index > 0) {
            return (
              <Badge.Ribbon text={"#" + (index + 1).toString()} color="gold">
                <Card style={{ borderRadius: "0.5em", ...style[index] }}>
                  <div className={styles.fitnessColumn}>
                    <span>Fitness:</span>
                    <h2>{Math.round(i.fitness * 100)}%</h2>
                  </div>
                </Card>
              </Badge.Ribbon>
            );
          }
        })}
      </div>
    </>
  );
};

export default TopFiveDisplay;
