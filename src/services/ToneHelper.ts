import * as Tone from "tone";

export function createTestOscillator() {
  let osc = new Tone.Oscillator(440, "sine").toMaster();
  return osc;
}
