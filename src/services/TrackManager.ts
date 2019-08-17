import Tone from "tone";

import { SynthOptions } from "tone";

import * as toneHelper from "./ToneHelper";

export class TrackManager {
  tracks: Track[];

  constructor() {
    this.tracks = [];

    this.tracks.push(new Track());
    this.tracks.push(new Track());
  }

  // TODO: Abstract out transport controls from the track manager
  playTracks() {
    // this.tracks.forEach(track => {
    //   track.play();
    // });
    console.log("start");
    Tone.Transport.schedule(time => {
      this.tracks[0].trackInstrument.triggerAttackRelease(
        "C4",
        // [Tone.Frequency("C4"), Tone.Frequency("E4"), Tone.Frequency("A4")],
        time
      );
    }, "8t");
    Tone.Transport.start(0);
  }

  pauseTracks() {
    toneHelper.pauseTransport();
  }

  stopTracks() {
    toneHelper.stopTransport();
  }

  changeTrackType(trackNumber: number, newType: OscillatorType) {
    try {
      this.tracks[trackNumber].changeTrackSynth(newType);
    } catch {
      console.log("error changing track types");
    }
  }

  updateTrackPattern(trackNumber: number, activeNotes: string[]) {
    console.log(activeNotes);
    const seq = new Tone.Sequence(
      (time, note) => {
        console.log(note);
      },
      activeNotes,
      "4n"
    ).start(0);
  }
}

export class Track {
  trackInstrument: Tone.PolySynth;

  constructor() {
    this.trackInstrument = toneHelper.createPolySynth();

    this.trackInstrument.toMaster();
  }

  play() {
    this.trackInstrument.triggerAttackRelease(
      "C4",
      // ["C4", "E4", "A4"]
      "4n"
    );
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
