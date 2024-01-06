import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Slider,
  Space,
} from "antd";
import styles from "./tw-components.module.css";

export default function SelectionTab(): JSX.Element {
  const [form] = Form.useForm();

  const [inputValue, setInputValue] = useState(5);

  const onChange = (newValue: number) => {
    setInputValue(newValue);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      layout="vertical"
      size="small"
      onFinish={onFinish}
    >
      <Form.Item label="Population Size">
        <InputNumber min={10} max={10000000} defaultValue={1000} />
      </Form.Item>
      <Form.Item label="Elitism %">
        <Row>
          <Col span={12}>
            <Slider
              min={1}
              max={100}
              onChange={onChange}
              value={typeof inputValue === "number" ? inputValue : 0}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={20}
              style={{ margin: "0 16px" }}
              value={inputValue}
              onChange={onChange}
            />
          </Col>
        </Row>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
