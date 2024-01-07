import { Card, Flex } from "antd";
import React from "react";
import Markdown from "react-markdown";
import { blurb } from "./content";

function BlurbCard() {
  return (
    <Card
      title="Typewriting Monkeys"
      style={{
        marginBottom: "1em",
      }}
    >
      <Flex justify="space-between" align="center" gap="large">
        <div>
          <Markdown>{blurb}</Markdown>
        </div>
        <div>
          <Markdown>{blurb}</Markdown>
        </div>
      </Flex>
    </Card>
  );
}

export default BlurbCard;
