import * as React from "react";
import CircleBase from "./CircleBase";

interface Props {
  children: React.ReactNode;
}

const SmallCircle = ({ children }: Props) => {
  return (
    <CircleBase outerSize={210} faceSize={180}>
      {children}
    </CircleBase>
  );
};

export default SmallCircle;
