import * as React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.scss";
import Calendar from "./Widget/Calendar";
import Clock from "./Widget/Clock";
import Timer from "./Widget/Timer";

const App = () => {
  return (
    <div className={styles.app}>
      <Calendar />
      <Clock />
      <Timer />
    </div>
  );
};

export default hot(App);
