import * as React from "react";
import { useState } from "react";
import SmallCircle from "../Ui/SmallCircle";
import styles from "./Timer.module.scss";

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState<number>(0);
  const [pausedMs, setPausedMs] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null
  );

  const startTimer = (startFrom: number) => {
    setTimerOn(true);
    const startTime = Date.now() - startFrom;
    setTimerInterval(
      setInterval(() => {
        setMilliseconds(Date.now() - startTime);
      }, 10)
    );
  };

  const pauseTimer = () => {
    setTimerOn(false);
    setPausedMs(milliseconds);
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setMilliseconds(0);
    setPausedMs(0);
  };

  const handleTimerClick = () => {
    if (timerOn) {
      pauseTimer();
    } else {
      startTimer(pausedMs);
    }
  };

  const handleDoubleClick = () => {
    resetTimer();
  };

  React.useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const centiseconds = Math.floor((time % 1000) / 10);
    return `${hours > 0 ? hours + ":" : ""}${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${centiseconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <SmallCircle>
      <div
        className={`${styles.time} ${milliseconds > 0 ? styles.active : null}`}
        onClick={handleTimerClick}
        onDoubleClick={handleDoubleClick}
      >
        {formatTime(milliseconds)}
      </div>
    </SmallCircle>
  );
};

export default Timer;
