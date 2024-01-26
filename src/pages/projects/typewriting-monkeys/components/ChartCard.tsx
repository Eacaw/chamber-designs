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
import styles from "../tw-monkeys.module.css";

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
  maintainAspectRatio: false,
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

  const [hasData, setHasData] = useState<boolean>(false);

  useEffect(() => {
    if (data.length > 0) {
      setHasData(true);
    }
  }, [data]);

  if (!hasData) {
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
        <div className={styles.chartCard}>
          <Row gutter={16}>
            <Col span={10} className={styles.contentCard}>
              <Line
                options={options}
                data={dataSet}
                height="400px"
                width="200px"
              />
            </Col>
            <Col span={4}>
              <Table
                dataSource={tableData}
                columns={columns}
                pagination={{ position: ["none"] }}
              >
                <Table.Summary fixed="top">
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={1}>
                      Total Runs
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              </Table>
            </Col>
          </Row>
        </div>
      </Card>
    );
  }
}
