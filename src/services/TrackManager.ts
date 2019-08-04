import * as toneHelper from "./ToneHelper";

export class TrackManager {
  tracks: Track[];

  constructor() {
    this.tracks = [];

    this.tracks.push(new Track(toneHelper.createOscillator()));
    this.tracks.push(new Track(toneHelper.createOscillator()));
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

  changeTrackType(trackNumber, newType) {
    try {
      this.tracks[trackNumber] = new Track(
        toneHelper.createOscillator(newType)
      );
    } catch {
      console.log("error changing track types");
    }
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
