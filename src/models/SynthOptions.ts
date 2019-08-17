import { SynthOptions } from "tone";

export const defaultSynthOption: SynthOptions = {
  oscillator: {
    type: "sine",
  },
  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 1,
  },
};
