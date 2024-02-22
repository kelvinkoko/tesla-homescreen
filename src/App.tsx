import * as React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.scss";
import Clock from "./Widget/Clock";

const App = () => {
  return (
    <div className={styles.app}>
      <Clock />
    </div>
  );
};

export default hot(App);
