import * as Tone from "tone";
import { defaultSynthOptions, SynthOptions } from "../models/SynthOptions";

export function createOscillator(oscillatorType = "sine") {
  let osc = new Tone.Oscillator(440, oscillatorType).toMaster();
  return osc;
}

export function createPolySynth(options: SynthOptions = defaultSynthOptions) {
  let synth = new Tone.PolySynth(4, Tone.Synth, options);
  return synth;
}

export function pauseTransport() {
  Tone.Transport.pause();
}
