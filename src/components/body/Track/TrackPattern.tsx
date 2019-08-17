import * as React from "react";

import { useState, useContext, useEffect } from "react";
import { PatternNode } from "./PatternNode";
import { TrackManagerContext } from "../../../App";

export interface TrackPatternProps {
  trackNumber: number;
}

export const TrackPattern: React.FC<TrackPatternProps> = props => {
  const tm = useContext(TrackManagerContext);
  const { trackNumber } = props;

  const [patternHeight, setPatternHeight] = useState(5);
  const [patternWidth, setPatternWidth] = useState(8);

  const [activeNotes, setActiveNotes] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const onNodeChange = (xValue, yValue) => {
    console.log(`${xValue} ${yValue}`);
    setActiveNotes(["C4", "C4", "C4", "C4", "C4", "C4", "C4", "C4"]);
  };

  useEffect(() => {
    console.log("effect");
    tm.updateTrackPattern(trackNumber, activeNotes);
  }, activeNotes);

  return (
    <div className="track-pattern">
      {[0, 1, 2, 3, 4].map(yValue => {
        return (
          <div key={yValue} className="pattern-row">
            {[0, 1, 2, 3, 4, 5, 6, 7].map(xValue => {
              return (
                <PatternNode
                  key={xValue}
                  xValue={xValue}
                  yValue={yValue}
                  onNodeChange={onNodeChange}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
