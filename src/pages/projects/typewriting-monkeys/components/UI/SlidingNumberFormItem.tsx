import { Col, Form, InputNumber, Row, Slider } from "antd";
import React from "react";

interface props {
  parentOnChange: (newValue: number) => void;
  min: number;
  max: number;
  initialValue: number;
  name: string;
  label: string;
  tooltip: string;
}

/**
 * @param parentOnChange Method that will handle the onChange event in the parent Form
 * @param min Minimum value that can be entered
 * @param max Maximum value that can be entered
 * @param initialValue Default value
 * @param name Name of the form input
 * @param label Label text of the input
 * @param tooltip Tooltip text of the input
 *
 * @returns An Ant Design Form.Item both a slider and number input that are synced
 */
function SlidingNumberFormItem(props: props): JSX.Element {
  const {
    parentOnChange = null,
    min = 0,
    max = 100,
    initialValue = 42,
    name = "slidingNumberInput",
    label = "slidingNumberInput",
    tooltip = null,
  } = props;

  const [selectedValue, setSelectedValue] = React.useState(initialValue);

  const onChange = (newValue: number) => {
    setSelectedValue(newValue);
    parentOnChange(newValue);
  };

  return (
    <Form.Item name={name} label={label} tooltip={tooltip}>
      <Row>
        <Col span={12}>
          <Slider
            min={min}
            max={max}
            onChange={onChange}
            value={typeof selectedValue === "number" ? selectedValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={min}
            max={max}
            style={{ margin: "0 16px" }}
            value={selectedValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    </Form.Item>
  );
}

export default SlidingNumberFormItem;
