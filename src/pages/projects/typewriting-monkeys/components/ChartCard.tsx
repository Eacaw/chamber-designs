import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Card, Col, Flex, Row, Table } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Fitness/Generations",
    },
  },
};

interface ChartCardProps {
  data: number[];
  tableData: Object[];
  clearData: () => void;
}

export default function ChartCard(props: ChartCardProps): JSX.Element {
  const { data, tableData, clearData } = props;

  const [haveData, setHaveData] = useState<boolean>(false);

  useEffect(() => {
    if (data.length > 0) {
      setHaveData(true);
    }
  }, [data]);

  if (!haveData) {
    return <div>Loading...</div>;
  } else {
    const generations = [];
    data.forEach((x, i) => {
      generations.push(i.toString());
    });

    const dataSet = {
      labels: generations,
      datasets: [
        {
          label: "Fitness/Generations",
          data: data.map((x) => x),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };

    const columns = [
      {
        title: "Run",
        dataIndex: "key",
        key: "key",
      },
      {
        title: "Generation",
        dataIndex: "generations",
        key: "key",
      },
    ];

    return (
      <Card
        title="Output Data"
        style={{
          marginBottom: "1em",
        }}
      >
        <Row gutter={16}>
          <Col span={20}>
            <Line options={options} data={dataSet} />
          </Col>
          <Col span={4}>
            <Table dataSource={tableData} columns={columns} />;
          </Col>
        </Row>
      </Card>
    );
  }
}
