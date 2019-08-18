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
  const synth = new Tone.PolySynth();

  useEffect(() => {
    synth.toMaster();
    Tone.Transport.schedule(time => {
      synth.triggerAttackRelease("C4", "8n");
    }, "1:0:0");
  }, []);

  const setSynthOscillatorType = newType => {
    synth.set({
      oscillator: {
        type: newType,
      },
    });
  };

  return (
    <div className="track">
      <TrackInfo
        trackNumber={trackNumber}
        setSynthOscillatorType={setSynthOscillatorType}
      />
      {/* <TrackPattern trackNumber={trackNumber} /> */}
    </div>
  );
};
