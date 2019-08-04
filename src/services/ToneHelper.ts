import * as Tone from "tone";

export function createOscillator(oscillatorType = "sine") {
  let osc = new Tone.Oscillator(440, oscillatorType).toMaster();
  return osc;
}
