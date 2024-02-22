import * as React from "react";
import { useEffect, useState } from "react";
import CircleBase from "../Ui/CircleBase";
import styles from "./Clock.module.scss";

const Clock = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds();

      // Create a blinking effect for the semi-colon
      const separator = seconds % 2 === 0 ? ":" : " ";

      setTime(`${hours}${separator}${minutes}`);
    };

    const intervalId = setInterval(updateTime, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <CircleBase>
      <div className={styles.time}>{time}</div>
    </CircleBase>
  );
};

export default Clock;
