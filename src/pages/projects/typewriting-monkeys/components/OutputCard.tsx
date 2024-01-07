import { Badge, Card, Flex } from "antd";
import React from "react";
import TopFiveDisplay from "./TopFiveDisplay";

interface OutputCardProps {
  topFive: any;
  generation: number;
  disableButton: boolean;
  gaSettings: any;
}

export default function OutputCard(props: OutputCardProps): JSX.Element {
  const { topFive, generation, disableButton, gaSettings } = props;
  return (
    <Card
      title="Output - Top 5"
      style={{
        marginBottom: "1em",
      }}
    >
      <TopFiveDisplay data={topFive} target={gaSettings.targetPhrase} />
      <Flex justify="space-between" align="center">
        <h3
          style={{
            marginTop: "1em",
          }}
        >
          Generations: {generation}
        </h3>
        <Flex gap="small" align="center">
          <Badge status={disableButton ? "processing" : "default"} />
          {disableButton ? <span>Running</span> : <span>Stopped</span>}
        </Flex>
      </Flex>
    </Card>
  );
}
