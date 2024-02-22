import * as React from "react";
import styles from "./CircleBase.module.scss";

interface Props {
  children: React.ReactNode;
}

const CircleBase = ({ children }: Props) => {
  return (
    <div className={styles.outerShape}>
      <div className={styles.face}>{children}</div>
    </div>
  );
};

export default CircleBase;
