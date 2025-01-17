import * as React from "react";
import CircleBase from "./CircleBase";

interface Props {
  children: React.ReactNode;
}

const LargeCircle = ({ children }: Props) => {
  return (
    <CircleBase outerSize={270} faceSize={240}>
      {children}
    </CircleBase>
  );
};

export default LargeCircle;
