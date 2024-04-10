import * as React from "react";
import { useEffect, useState } from "react";
import settingsStore from "../Store/SettingsStore";
import SmallCircle from "../Ui/SmallCircle";
import styles from "./Calendar.module.scss";

const Calendar = () => {
  const [month, setMonth] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [weekday, setWeekday] = useState<string>("");

  useEffect(() => {
    const updateDate = () => {
      const currentDate = settingsStore.getTimezoneOffsetTime();
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
  }, []);

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
