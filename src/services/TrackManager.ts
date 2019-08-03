import * as toneHelper from "./ToneHelper";

export class TrackManager {
  tracks: Track[];

  constructor() {
    this.tracks = [];

    this.tracks.push(new Track(toneHelper.createTestOscillator()));
  }

  playTracks() {
    this.tracks.forEach(track => {
      track.play();
    });
  }

  pauseTracks() {
    this.tracks.forEach(track => {
      track.pause();
    });
  }
}

export class Track {
  soundSource: Tone.Source;

  constructor(sound: Tone.Source) {
    this.soundSource = sound;
  }

  play() {
    this.soundSource.start();
  }

  pause() {
    this.soundSource.stop();
  }
}
