import * as Tone from "tone";

import * as toneHelper from "./ToneHelper";
import { SynthOptions } from "../models/SynthOptions";

export class TrackManager {
  tracks: Track[];

  constructor() {
    this.tracks = [];

    this.tracks.push(new Track());
    this.tracks.push(new Track());
  }

  playTracks() {
    this.tracks.forEach(track => {
      track.play();
    });
  }

  pauseTracks() {
    toneHelper.pauseTransport();
  }

  changeTrackType(trackNumber: number, newType: OscillatorType) {
    try {
      this.tracks[trackNumber].changeTrackSynth(newType);
    } catch {
      console.log("error changing track types");
    }
  }
}

export class Track {
  trackInstrument: Tone.PolySynth;

  constructor() {
    this.trackInstrument = toneHelper.createPolySynth();

    this.trackInstrument.toMaster();
  }

  play() {
    this.trackInstrument.triggerAttackRelease(["C4", "E4", "A4"], "4n");
  }

  changeTrackSynth(newType) {
    const newOptions: SynthOptions = {
      oscillator: {
        type: newType,
      },
      envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.3,
        release: 1,
      },
    };

    this.trackInstrument.set(newOptions);
  }
}
