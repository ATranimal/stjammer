import * as Tone from "tone";

export function testFunction() {
  let osc = new Tone.Oscillator(440, "sine").toMaster();
  // osc.start();
  console.log(osc);
  return osc;
}
