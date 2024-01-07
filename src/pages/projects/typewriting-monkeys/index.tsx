import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { useState } from "react";

import { runSimulation } from "./src/TypewritingMonkeys";

import { Card, Col, Row } from "antd";
import SettingsTab from "./components/SettingsTab";
import TopFiveDisplay from "./components/TopFiveDisplay";
import { DEFAULT_GA_SETTINGS } from "./components/constants";
import { GASettings } from "./src/types";
import styles from "./tw-monkeys.module.css";

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
            <Col span={14}>
              <Card
                title="Output - Top 5"
                style={{
                  marginBottom: "1em",
                }}
              >
                <TopFiveDisplay
                  data={topFive}
                  target={gaSettings.targetPhrase}
                />
                <h3
                  style={{
                    marginTop: "1em",
                  }}
                >
                  Generations: {generation}
                </h3>
              </Card>
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
