import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { useState, useEffect } from "react";

import { runSimulation } from "./src/TypewritingMonkeys";

import { Card, Col, Row } from "antd";
import ControlPanel from "./components/ControlPanel";
import { GASettings } from "./src/types";
import styles from "./tw-monkeys.module.css";

import BlurbCard from "./components/BlurbCard";
import OutputCard from "./components/OutputCard";
import { DEFAULT_GA_SETTINGS, DEFAULT_GENES } from "./src/constants";
import ChartCard from "./components/ChartCard";
import { DNA } from "./src/DNA";

export default function projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  // Setting Object
  const [gaSettings, setGASettings] = useState<GASettings>(DEFAULT_GA_SETTINGS);
  // Output
  const [topFive, setTopFive] = useState<DNA[]>(DEFAULT_GENES);
  const [generation, setGeneration] = useState<number>(0);
  const [previousGenerations, setPreviousGenerations] = useState<number[]>([]);
  const [bestFitness, setBestFitness] = useState<number[]>([]);
  // UI
  const [disableButton, setDisableButton] = useState<Boolean>(false);

  // Grab the top fitness for each generation
  useEffect(() => {
    setBestFitness([...bestFitness, topFive[0].fitness]);
  }, [topFive]);

  useEffect(() => {
    if (!disableButton) {
      setPreviousGenerations([
        ...previousGenerations,
        { key: previousGenerations.length, generations: generation },
      ]);
    }
    console.log("Previous Generations: ", previousGenerations);
  }, [disableButton]);

  const startSimulation = () => {
    runSimulation(setTopFive, setGeneration, simulationFinished, gaSettings);
    // setBestFitness([]);
    setDisableButton(true);
  };

  const simulationFinished = () => {
    setDisableButton(false);
  };

  const clearData = () => {
    setBestFitness([]);
    setPreviousGenerations([]);
  };

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Personal Project Portfolio of David Pinchen"
    >
      <div className={styles.content}>
        <main>
          <Row gutter={16}>
            <Col span={24}>
              <BlurbCard />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={14}>
              <OutputCard
                topFive={topFive}
                generation={generation}
                disableButton={disableButton}
                gaSettings={gaSettings}
              />
            </Col>
            <Col span={10}>
              <Card
                title="Options"
                bordered={false}
                style={{
                  marginBottom: "1em",
                }}
              >
                <ControlPanel
                  setGASettings={setGASettings}
                  startSimulation={startSimulation}
                  disableButton={disableButton}
                  clearData={clearData}
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <ChartCard
                data={bestFitness}
                tableData={previousGenerations}
                clearData={clearData}
              />
            </Col>
          </Row>
        </main>
      </div>
    </Layout>
  );
}
