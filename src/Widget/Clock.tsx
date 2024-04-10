import * as _ from "lodash";
import * as React from "react";
import { useEffect, useState } from "react";
import Dome from "../Ui/Dome";
import styles from "./Clock.module.scss";
import { timezoneOffsetTime } from "../Store/SettingsStore";

interface Props {
  gmtOffset: number;
}

const Clock = ({ gmtOffset }: Props) => {
  const [time, setTime] = useState<string>("");
  const [hourAngle, setHourAngle] = useState<number>(0);
  const [minuteAngle, setMinuteAngle] = useState<number>(0);

  useEffect(() => {
    const updateTime = () => {
      const date = timezoneOffsetTime(gmtOffset);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds();

      // Create a blinking effect for the semi-colon
      const separator = seconds % 2 === 0 ? ":" : " ";

      const minutesPassed = (date.getHours() % 12) * 60 + date.getMinutes();
      setHourAngle((minutesPassed * 360) / (12 * 60));
      setMinuteAngle((date.getMinutes() * 360) / 59);
      setTime(`${hours}${separator}${minutes}`);
    };

    // Display the time immediately
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [gmtOffset]);
  const radius = 100;
  return (
    <Dome>
      <div className={styles.container}>
        <div className={styles.time}>{time}</div>
        <div className={styles.clockFace}>
          {_.range(1, 13).map(i => {
            const radian = ((i * 30 + 180) * Math.PI) / 180;
            const x = -((radius - 9) * Math.sin(radian)) + radius;
            const y = (radius - 9) * Math.cos(radian) + radius;
            return (
              <div
                className={styles.hourMark}
                style={{
                  transform: `translateX(${x - 9}px) translateY(${y - 9}px)`
                }}
              >
                {i}
              </div>
            );
          })}
          <div
            className={styles.hourHand}
            style={{
              transform: `rotate(${hourAngle + 180}deg)`
            }}
          />
          <div
            className={styles.minuteHand}
            style={{
              transform: `rotate(${minuteAngle + 180}deg)`
            }}
          />
        </div>
      </div>
    </Dome>
  );
};

export default Clock;
