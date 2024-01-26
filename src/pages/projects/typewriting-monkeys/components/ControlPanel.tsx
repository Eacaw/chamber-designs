import { useState } from "react";

import SlidingNumberFormItem from "./UI/SlidingNumberFormItem";
import TextFormItem from "./UI/TextFormItem";
import NumberFormItem from "./UI/NumberFormItem";
import Combobox from "./UI/ComboBox";

import styles from "../tw-monkeys.module.css";
import ControlPanelButtons from "./ControlPanelButtons";
import { DEFAULT_GA_SETTINGS } from "../src/constants";
import { Col, Row } from "antd";

interface ControlPanelProps {
  setGASettings: (settings: Object) => void;
  startSimulation: () => void;
  disableButton: boolean;
  clearData: () => void;
}

export default function ControlPanel(props: ControlPanelProps): JSX.Element {
  const { setGASettings, startSimulation, disableButton, clearData } = props;

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
  const [crossover, setCrossoverMethod] = useState(
    DEFAULT_GA_SETTINGS.crossoverMethod
  );

  const onChangeCrossoverMethod = (newValue: string) => {
    setCrossoverMethod(newValue);
    setGASettingsOnParent({ crossoverMethod: newValue });
  };
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

  const crossoverMethodProps = {
    parentOnChange: onChangeCrossoverMethod,
    initialValue: "Random",
    values: [
      { value: "random", label: "Random" },
      { value: "singlePoint", label: "Single Point" },
      { value: "doublePoint", label: "Double Point" },
      { value: "uniform", label: "Uniform" },
    ],
    name: "crossoverMethod",
    label: "crossoverMethod",
    tooltip: "crossoverMethod",
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
    crossoverMethod = crossover,
  }) => {
    setGASettings({
      targetPhrase: targetPhrase,
      populationSize: population,
      elitismValue: elitism,
      mutationRate: mutation,
      crossoverMethod: crossoverMethod,
    });
  };

  return (
    <>
      <div className={styles.contentCard}>
        <ControlPanelButtons
          startSimulation={startSimulation}
          clearData={clearData}
          disableButton={disableButton}
        />
        <Row justify="center">
          <Col span={8}>
            <Combobox {...crossoverMethodProps} />
          </Col>
        </Row>
        <TextFormItem {...targetPhraseProps} />
        <NumberFormItem {...populationSizeProps} />
        <SlidingNumberFormItem {...elitismProps} />
        <SlidingNumberFormItem {...mutationProps} />
      </div>
    </>
  );
}
