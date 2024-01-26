import {
  ClearOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import styles from "../tw-monkeys.module.css";

interface ControlPanelButtonsProps {
  startSimulation: () => void;
  clearData: () => void;
  disableButton: boolean;
}

export default function ControlPanelButtons(
  props: ControlPanelButtonsProps
): JSX.Element {
  const { startSimulation, clearData, disableButton } = props;

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
      <Tooltip title="Clear">
        <Button
          onClick={clearData}
          disabled={disableButton}
          danger
          icon={<ClearOutlined />}
        ></Button>
      </Tooltip>
    </div>
  );
}
