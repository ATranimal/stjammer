import * as React from "react";

import { useState } from "react";

export interface PatternNodeProps {
  xValue: number;
  yValue: number;
  onNodeChange: Function;
}

export const PatternNode: React.FC<PatternNodeProps> = props => {
  const { xValue, yValue, onNodeChange } = props;

  const [isActive, setIsActive] = useState("");

  const onNodeClick = () => {
    isActive === "" ? setIsActive("active") : setIsActive("");
    onNodeChange(xValue, yValue);
  };

  return (
    <div className="pattern-node" onClick={onNodeClick}>
      <div className={isActive} />
    </div>
  );
};
