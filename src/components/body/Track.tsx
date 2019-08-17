import * as React from "react";

import { useContext } from "react";

import "./Track/track.scss";
import { TrackInfo } from "./Track/TrackInfo";
import { TrackPattern } from "./Track/TrackPattern";
import { TrackManagerContext } from "../../App";

export interface TrackProps {
  trackNumber: number;
}

export const Track: React.FC<TrackProps> = props => {
  const tm = useContext(TrackManagerContext);
  const { trackNumber } = props;

  return (
    <div className="track">
      <TrackInfo trackNumber={trackNumber} />
      <TrackPattern trackNumber={trackNumber} />
    </div>
  );
};
