import { Form, InputNumber } from "antd";
import { useState } from "react";

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
 * @returns An Ant Design Form.Item with a number input
 */
export default function NumberFormItem(props: props): JSX.Element {
  const {
    parentOnChange = null,
    min = 0,
    max = 100,
    initialValue = 42,
    name = "numberInput",
    label = "numberInput",
    tooltip = null,
  } = props;

  return (
    <Form.Item name={name} label={label} tooltip={tooltip}>
      <InputNumber
        min={min}
        max={max}
        defaultValue={initialValue}
        onChange={parentOnChange}
      />
    </Form.Item>
  );
}
