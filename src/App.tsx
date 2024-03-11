import * as React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.scss";
import bgImage from "./Image/launch-bg.jpg";
import Calendar from "./Widget/Calendar";
import Clock from "./Widget/Clock";
import Timer from "./Widget/Timer";

const App = () => {
  return (
    <>
      <img className={styles.bg} src={bgImage} />
      <div className={styles.app}>
        <div className={styles.container}>
          <Calendar />
          <Clock />
          <Timer />
        </div>
      </div>
    </>
  );
};

export default hot(App);
