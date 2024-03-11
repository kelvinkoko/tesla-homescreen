import * as React from "react";
import styles from "./CircleBase.module.scss";

interface Props {
  children: React.ReactNode;
  outerSize: number;
  faceSize: number;
}

const CircleBase = ({ children, outerSize, faceSize }: Props) => {
  const faceOffset = (outerSize - faceSize) / 2;
  return (
    <div
      className={styles.glassCircle}
      style={{ width: outerSize, height: outerSize }}
    >
      {children}
    </div>
  );
};

export default CircleBase;
