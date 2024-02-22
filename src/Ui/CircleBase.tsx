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
      className={styles.outerShape}
      style={{ width: outerSize, height: outerSize }}
    >
      <div
        className={styles.face}
        style={{
          width: faceSize,
          height: faceSize,
          top: faceOffset,
          left: faceOffset
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CircleBase;
