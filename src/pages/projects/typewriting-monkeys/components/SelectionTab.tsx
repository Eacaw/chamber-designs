import { Col, Form, InputNumber, Row, Slider } from "antd";
import { useState } from "react";
import NumberFormItem from "./UI/numberFormItem";
import SlidingNumberFormItem from "./UI/SlidingNumberFormItem";

export default function SelectionTab(props: any): JSX.Element {
  const { setGASettings } = props;

  const [form] = Form.useForm();

  const [populationSize, setPopulationSize] = useState(1000);
  const [elitismValue, setElitismValue] = useState(5);
  const [mutationRate, setMutationRate] = useState(5);

  const onChangePopulation = (newValue: number) => {
    setPopulationSize(newValue);
    setGASettingsOnParent({ population: newValue });
  };
  const onChangeElite = (newValue: number) => {
    setElitismValue(newValue);
    setGASettingsOnParent({ elitism: newValue });
  };
  const onChangeMutate = (newValue: number) => {
    setMutationRate(newValue);
    setGASettingsOnParent({ mutation: newValue });
  };

  const populationSizeProps = {
    parentOnChange: onChangePopulation,
    min: 50,
    max: 100000,
    initialValue: 1000,
    name: "populationSize",
    label: "populationSize",
    tooltip: "populationSize",
  };
  const elitismProps = {
    parentOnChange: onChangeElite,
    min: 1,
    max: 100,
    initialValue: 5,
    name: "elitismValue",
    label: "elitismValue",
    tooltip: "elitismValue",
  };
  const mutationProps = {
    parentOnChange: onChangeMutate,
    min: 1,
    max: 100,
    initialValue: 5,
    name: "mutationRate",
    label: "mutationRate",
    tooltip: "mutationRate",
  };

  const setGASettingsOnParent = ({
    population = populationSize,
    elitism = elitismValue,
    mutation = mutationRate,
  }) => {
    setGASettings({
      populationSize: population,
      elitismValue: elitism,
      mutationRate: mutation,
    });
    console.log("GA Settings: ", {
      populationSize: population,
      elitismValue: elitism,
      mutationRate: mutation,
    });
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
      layout="vertical"
      size="small"
    >
      <NumberFormItem {...populationSizeProps} />
      <SlidingNumberFormItem {...elitismProps} />
      <SlidingNumberFormItem {...mutationProps} />
    </Form>
  );
}
