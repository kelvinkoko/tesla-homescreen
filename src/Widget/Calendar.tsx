import * as React from "react";
import { useEffect, useState } from "react";
import SmallCircle from "../Ui/SmallCircle";
import styles from "./Calendar.module.scss";

interface Props {
  initialTime: Date;
}

const Calendar = ({ initialTime }: Props) => {
  const [month, setMonth] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [weekday, setWeekday] = useState<string>("");

  useEffect(() => {
    const updateDate = () => {
      const currentDate = initialTime;
      setMonth(currentDate.toLocaleString("default", { month: "long" }));
      setDate(currentDate.getDate().toString());
      setWeekday(
        currentDate.toLocaleString("default", {
          weekday: "short"
        })
      );
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        updateDate();
      }
    };
    // Display the date immediately
    updateDate();
    //
    document.addEventListener("visibilitychange", onVisibilityChange);
    // Keep update the date in low interval so when pass through the day, it
    const intervalId = setInterval(updateDate, 60 * 1000);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      clearInterval(intervalId);
    };
  }, [initialTime]);

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
