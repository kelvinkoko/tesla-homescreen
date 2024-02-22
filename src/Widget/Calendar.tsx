import * as React from "react";
import SmallCircle from "../Ui/SmallCircle";
import styles from "./Calendar.module.scss";

const Calendar = () => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const date = currentDate.getDate();
  const weekday = currentDate.toLocaleString("default", { weekday: "short" });

  return (
    <SmallCircle>
      <div className={styles.container}>
        <div className={styles.month}>{month}</div>
        <div className={styles.date}>{date}</div>
        <div className={styles.weekday}>{weekday}</div>
      </div>
    </SmallCircle>
  );
};

export default Calendar;
