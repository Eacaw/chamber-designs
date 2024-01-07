import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { useState } from "react";

import { runSimulation } from "./src/TypewritingMonkeys";

import { Card, Col, Flex, Row } from "antd";
import SettingsTab from "./components/SettingsTab";
import { DEFAULT_GA_SETTINGS } from "./components/constants";
import { GASettings } from "./src/types";
import styles from "./tw-monkeys.module.css";

import BlurbCard from "./components/BlurbCard";
import OutputCard from "./components/OutputCard";
import { DEFAULT_GENES } from "./src/constants";

export default function projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [topFive, setTopFive] = React.useState(DEFAULT_GENES);

  const [generation, setGeneration] = React.useState(0);
  const [disableButton, setDisableButton] = React.useState(false);

  const [gaSettings, setGASettings] = useState<GASettings>(DEFAULT_GA_SETTINGS);

  const simulationFinished = () => {
    setDisableButton(false);
  };

  const startSimulation = () => {
    runSimulation(setTopFive, setGeneration, simulationFinished, gaSettings);
    setDisableButton(true);
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
                <SettingsTab
                  setGASettings={setGASettings}
                  startSimulation={startSimulation}
                  disableButton={disableButton}
                />
              </Card>
            </Col>
          </Row>
        </main>
      </div>
    </Layout>
  );
}
