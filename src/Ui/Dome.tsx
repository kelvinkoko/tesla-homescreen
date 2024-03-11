import * as React from "react";
import styles from "./CircleBase.module.scss";

interface Props {
  children: React.ReactNode;
}

const Dome = ({ children }: Props) => {
  return (
    <div className={`${styles.glassCircle} ${styles.dome}`}>{children}</div>
  );
};

export default Dome;
