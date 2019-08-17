import Tone, {
  BasicOscillatorType,
  PolySynthOptions,
  SynthOptions,
} from "tone";

import { defaultSynthOption } from "../models/SynthOptions";

export function createOscillator(oscillatorType: BasicOscillatorType = "sine") {
  let osc = new Tone.Oscillator(440, oscillatorType).toMaster();
  return osc;
}

export function createPolySynth(options: SynthOptions = defaultSynthOption) {
  // TODO : Set options! Somehow, it seems like there are two constructors for polysynth, either
  // giving (voices, synth type) or (options). look into if there is some way to change it after?
  const polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
  return polySynth;
}

export function pauseTransport() {
  Tone.Transport.pause();
}

export function stopTransport() {
  Tone.Transport.stop();
}
