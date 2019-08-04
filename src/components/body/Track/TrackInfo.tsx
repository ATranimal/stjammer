import * as React from "react";

import { useState, useContext } from "react";
import Select from "react-select";

import { SoundTypes } from "../../../models/SoundTypes";
import { TrackManagerContext } from "../../../App";

export interface TrackInfoProps {
  trackNumber: number;
}

export const TrackInfo: React.FC<TrackInfoProps> = props => {
  const { trackNumber } = props;

  const tm = useContext(TrackManagerContext);

  const [soundType, setSoundType] = useState("sine");

  const handleSoundChange = selectedOption => {
    setSoundType(selectedOption.value);
    tm.changeTrackType(trackNumber, selectedOption.value);
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
