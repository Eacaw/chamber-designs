import { Badge, Button, Col, Flex, Form, InputNumber, Row, Slider } from "antd";
import { useState } from "react";
import TestFormItem from "./UI/TextFormItem";
import NumberFormItem from "./UI/numberFormItem";
import SlidingNumberFormItem from "./UI/SlidingNumberFormItem";

import styles from "./tw-components.module.css";
import { DEFAULT_GA_SETTINGS } from "./constants";

export default function SettingsTab(props: any): JSX.Element {
  const { setGASettings, startSimulation, disableButton } = props;

  const [form] = Form.useForm();

  const [target, setTarget] = useState(DEFAULT_GA_SETTINGS.targetPhrase);
  const [populationSize, setPopulationSize] = useState(
    DEFAULT_GA_SETTINGS.populationSize
  );
  const [elitismValue, setElitismValue] = useState(
    DEFAULT_GA_SETTINGS.elitismValue
  );
  const [mutationRate, setMutationRate] = useState(
    DEFAULT_GA_SETTINGS.mutationRate
  );

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

  const onChangeTargetPhrase = (newValue: string) => {
    setTarget(newValue);
    setGASettingsOnParent({ targetPhrase: newValue });
  };

  const targetPhraseProps = {
    parentOnChange: onChangeTargetPhrase,
    placeholder: DEFAULT_GA_SETTINGS.targetPhrase,
    name: "targetPhrase",
    label: "targetPhrase",
    tooltip: "targetPhrase",
  };
  const populationSizeProps = {
    parentOnChange: onChangePopulation,
    min: 50,
    max: 100000,
    initialValue: DEFAULT_GA_SETTINGS.populationSize,
    name: "populationSize",
    label: "populationSize",
    tooltip: "populationSize",
  };
  const elitismProps = {
    parentOnChange: onChangeElite,
    min: 1,
    max: 100,
    initialValue: DEFAULT_GA_SETTINGS.elitismValue,
    name: "elitismValue",
    label: "elitismValue",
    tooltip: "elitismValue",
  };
  const mutationProps = {
    parentOnChange: onChangeMutate,
    min: 1,
    max: 100,
    initialValue: DEFAULT_GA_SETTINGS.mutationRate,
    name: "mutationRate",
    label: "mutationRate",
    tooltip: "mutationRate",
  };

  const setGASettingsOnParent = ({
    targetPhrase = target,
    population = populationSize,
    elitism = elitismValue,
    mutation = mutationRate,
  }) => {
    setGASettings({
      targetPhrase: targetPhrase,
      populationSize: population,
      elitismValue: elitism,
      mutationRate: mutation,
    });
  };

  return (
    <>
      <TestFormItem {...targetPhraseProps} />
      <div className={styles.optionsCard}>
        <div className={styles.buttonMenu}>
          <Button onClick={startSimulation} disabled={disableButton}>
            Click To run sim
          </Button>
        </div>
        <Form
          form={form}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          layout="vertical"
          size="small"
        >
          <NumberFormItem {...populationSizeProps} />
          <SlidingNumberFormItem {...elitismProps} />
          <SlidingNumberFormItem {...mutationProps} />
        </Form>
      </div>
    </>
  );
}
