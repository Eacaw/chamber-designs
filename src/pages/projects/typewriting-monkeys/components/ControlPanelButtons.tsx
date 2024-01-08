import React from "react";
import styles from "../tw-monkeys.module.css";
import { Button, Tooltip } from "antd";
import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";

interface ControlPanelButtonsProps {
  startSimulation: () => void;
  disableButton: boolean;
}

export default function ControlPanelButtons(
  props: ControlPanelButtonsProps
): JSX.Element {
  const { startSimulation, disableButton } = props;

  return (
    <div className={styles.buttonMenu}>
      <Tooltip title="Start simulation">
        <Button
          onClick={startSimulation}
          disabled={disableButton}
          icon={<PlayCircleOutlined />}
        ></Button>
      </Tooltip>
      <Tooltip title="Pause simulation">
        <Button
          disabled={!disableButton}
          icon={<PauseCircleOutlined />}
        ></Button>
      </Tooltip>
      <Tooltip title="Stop simulation">
        <Button
          disabled={!disableButton}
          danger
          icon={<StopOutlined />}
        ></Button>
      </Tooltip>
    </div>
  );
}
