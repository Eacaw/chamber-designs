import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

import { runSimulation } from "./src/TypewritingMonkeys";

import styles from "./tw-monkeys.module.css";
import TopFiveDisplay from "../../../components/TypewritingMonkeys/TopFiveDisplay";
import { Button, Card, Col, Row } from "antd";
import SelectionTab from "./components/SelectionTab";

export default function projects(): JSX.Element {
  const defaultGenes = ["---", "---", "---", "---", "---"];
  const { siteConfig } = useDocusaurusContext();
  const [topFive, setTopFive] = React.useState(defaultGenes);

  const [generation, setGeneration] = React.useState(0);
  const [disableButton, setDisableButton] = React.useState(false);

  const simulationFinished = () => {
    setDisableButton(false);
  };

  const startSimulation = () => {
    runSimulation(setTopFive, setGeneration, simulationFinished);
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
            <Col span={12}>
              <Card
                title="Top Five Gene Arrays"
                style={{
                  marginBottom: "1em",
                }}
              >
                <TopFiveDisplay data={topFive} />
                <h3
                  style={{
                    marginTop: "1em",
                  }}
                >
                  Generations: {generation}
                </h3>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="Options"
                bordered={false}
                style={{
                  marginBottom: "1em",
                }}
              >
                <SelectionTab />
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Card title="Controls" bordered={false}>
                <div
                  style={{
                    height: "8em",
                  }}
                >
                  <Button onClick={startSimulation} disabled={disableButton}>
                    Click To run sim
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </main>
      </div>
    </Layout>
  );
}
