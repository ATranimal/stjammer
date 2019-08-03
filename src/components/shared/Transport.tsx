import * as React from "react";

import { useContext, useState } from "react";
import "./Transport.scss";
import { TrackManagerContext } from "../../App";

export const Transport: React.FC = () => {
  const tm = useContext(TrackManagerContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const [playText, setPlayText] = useState("Play");

  const onPlayClick = () => {
    const playTracks = () => {
      setPlayText("Pause");
      setIsPlaying(true);
      tm.playTracks();
    };

    const pauseTracks = () => {
      setPlayText("Play");
      setIsPlaying(false);
      tm.pauseTracks();
    };

    isPlaying ? pauseTracks() : playTracks();
  };

  return (
    <footer>
      <div className="transport-bar">
        <button className="btn loop-button">Loop</button>
        <button className="btn play-button" onClick={() => onPlayClick()}>
          {playText}
        </button>
      </div>
    </footer>
  );
};
