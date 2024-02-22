import * as React from "react";
import CircleBase from "../Ui/CircleBase";
import styles from "./Calendar.module.scss";

const Calendar = () => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const date = currentDate.getDate();
  const weekday = currentDate.toLocaleString("default", { weekday: "short" });

  return (
    <CircleBase>
      <div className={styles.container}>
        <div className={styles.month}>{month}</div>
        <div className={styles.date}>{date}</div>
        <div className={styles.weekday}>{weekday}</div>
      </div>
    </CircleBase>
  );
};

export default Calendar;
