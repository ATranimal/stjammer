import * as React from "react";

import { useState } from "react";

export interface PatternNodeProps {
  xValue: number;
  yValue: number;
}

export const PatternNode: React.FC<PatternNodeProps> = props => {
  const { xValue, yValue } = props;

  const [isActive, setIsActive] = useState("");

  const onNodeClick = () => {
    isActive === "" ? setIsActive("active") : setIsActive("");
    console.log(isActive);
  };

  return (
    <div className="pattern-node" onClick={onNodeClick}>
      <div className={isActive} />
    </div>
  );
};
