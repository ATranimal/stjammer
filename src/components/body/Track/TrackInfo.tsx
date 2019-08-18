import * as React from "react";

import { useState, useContext } from "react";
import Select from "react-select";

import { SoundTypes } from "../../../models/SoundTypes";

export interface TrackInfoProps {
  trackNumber: number;
  setSynthOscillatorType: Function;
}

export const TrackInfo: React.FC<TrackInfoProps> = props => {
  const { trackNumber, setSynthOscillatorType } = props;

  const [soundType, setSoundType] = useState("sine");

  const handleSoundChange = selectedOption => {
    setSoundType(selectedOption.value);
    setSynthOscillatorType(selectedOption.value);
  };

  return (
    <div className="track-info">
      <Select
        value={{ value: soundType, label: soundType }}
        onChange={handleSoundChange}
        options={[
          {
            value: "sine",
            label: "sine",
          },
          {
            value: "square",
            label: "square",
          },
          {
            value: "triangle",
            label: "triangle",
          },
          {
            value: "sawtooth",
            label: "sawtooth",
          },
        ]}
      />
    </div>
  );
};
