import { Form, Input } from "antd";

interface props {
  parentOnChange: (newValue: string) => void;
  placeholder: string;
  name: string;
  label: string;
  tooltip: string;
}

/**
 * @param parentOnChange Method that will handle the onChange event in the parent Form
 * @param min Minimum value that can be entered
 * @param max Maximum value that can be entered
 * @param placeholder Default value to show as a placeholder
 * @param name Name of the form input
 * @param label Label text of the input
 * @param tooltip Tooltip text of the input
 *
 * @returns An Ant Design Form.Item both a slider and number input that are synced
 */
export default function TextFormItem(props: props): JSX.Element {
  const {
    parentOnChange = null,
    placeholder = 42,
    name = "slidingNumberInput",
    label = "slidingNumberInput",
    tooltip = null,
  } = props;

  const onChange = (newValue: string) => {
    parentOnChange(newValue);
  };

  return (
    <Form.Item name={name} label={label} tooltip={tooltip}>
      <Input
        count={{
          show: true,
          max: 100,
        }}
        defaultValue={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Item>
  );
}
