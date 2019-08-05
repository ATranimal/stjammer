import * as React from "react";

import "./Track/track.scss";
import { TrackInfo } from "./Track/TrackInfo";
import { TrackPattern } from "./Track/TrackPattern";

export interface TrackProps {
  trackNumber: number;
}

export const Track: React.FC<TrackProps> = props => {
  const { trackNumber } = props;

  return (
    <div className="track">
      <TrackInfo trackNumber={trackNumber} />
      <TrackPattern />
    </div>
  );
};
