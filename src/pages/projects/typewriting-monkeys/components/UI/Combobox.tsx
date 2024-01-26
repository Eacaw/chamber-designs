import { Form, InputNumber, Select } from "antd";
import { useState } from "react";

interface props {
  parentOnChange: (newValue: string) => void;
  initialValue: string;
  values: comboboxOption[];
  name: string;
  label: string;
  tooltip: string;
}

export interface comboboxOption {
  value: string;
  label: string;
}

/**
 * @param parentOnChange Method that will handle the onChange event in the parent Form
 * @param initialValue Default value
 * @param values Array of values that can be selected
 * @param name Name of the form input
 * @param label Label text of the input
 * @param tooltip Tooltip text of the input
 *
 * @returns An Ant Design Form.Item with a number input
 */
export default function Combobox(props: props): JSX.Element {
  const {
    parentOnChange = null,
    values = [],
    initialValue = "Combobox",
    name = "combobox",
    label = "combobox",
    tooltip = null,
  } = props;

  return (
    <Form.Item name={name} label={label} tooltip={tooltip}>
      <Select
        options={values}
        defaultValue={initialValue}
        onChange={parentOnChange}
      />
    </Form.Item>
  );
}
