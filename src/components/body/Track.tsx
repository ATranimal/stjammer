import * as React from "react";
import Tone from "tone";

import { useEffect } from "react";

import { TrackInfo } from "./Track/TrackInfo";
import { TrackPattern } from "./Track/TrackPattern";

import "./Track/track.scss";

export interface TrackProps {
  trackNumber: number;
}

export const Track: React.FC<TrackProps> = props => {
  const { trackNumber } = props;
  const synth = new Tone.Synth();

  useEffect(() => {
    synth.toMaster();
    Tone.Transport.schedule(time => {
      synth.triggerAttackRelease("C4", "8n");
    }, "1:0:0");
  }, []);

  return (
    <div className="track">
      {/* <TrackInfo trackNumber={trackNumber} />
      <TrackPattern trackNumber={trackNumber} /> */}
    </div>
  );
};
