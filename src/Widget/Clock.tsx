import * as _ from "lodash";
import * as React from "react";
import { useEffect, useState } from "react";
import Dome from "../Ui/Dome";
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

    // Display the time immediately
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);
  const radius = 100;
  return (
    <Dome>
      <div className={styles.container}>
        <div className={styles.time}>{time}</div>
        <div className={styles.clockFace}>
          {_.range(1, 13).map(i => {
            const radian = ((i * 30 + 180) * Math.PI) / 180;
            const x = -(radius * Math.sin(radian)) + radius;
            const y = radius * Math.cos(radian) + radius;
            return (
              <div
                className={styles.hourMark}
                style={{
                  transform: `translateX(${x}px) translateY(${y}px)`
                }}
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
    </Dome>
  );
};

export default Clock;
