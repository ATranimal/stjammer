import * as React from "react";

import { useState } from "react";
import { PatternNode } from "./PatternNode";

export const TrackPattern: React.FC = () => {
  const [patternHeight, setPatternHeight] = useState(5);
  const [patternWidth, setPatternWidth] = useState(8);

  const [activeNodes, setActiveNodes] = useState([]);

  return (
    <div className="track-pattern">
      {[1, 2, 3, 4, 5].map(yValue => {
        return (
          <div key={yValue} className="pattern-row">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(xValue => {
              return (
                <PatternNode key={xValue} xValue={xValue} yValue={yValue} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
