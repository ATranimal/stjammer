export type SynthOptions = {
  oscillator: {
    type: OscillatorType;
  };
  envelope: {
    attack: number;
    decay: number;
    sustain: number;
    release: number;
  };
};

export const defaultSynthOptions: SynthOptions = {
  oscillator: {
    type: "triangle",
  },
  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 1,
  },
};
