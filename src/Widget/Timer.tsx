import * as React from "react";
import SmallCircle from "../Ui/SmallCircle";
import styles from "./Timer.module.scss";

const Timer = () => {
  return (
    <SmallCircle>
      <div className={styles.time}>0'00''000</div>
    </SmallCircle>
  );
};

export default Timer;
