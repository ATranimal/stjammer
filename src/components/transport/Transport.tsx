import * as React from "react";
import Tone from "tone";

import { useEffect, useState } from "react";

import "./Transport.scss";

export const Transport: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playText, setPlayText] = useState("Play");

  useEffect(() => {
    Tone.Transport.position = "1:0:0";
  }, []);

  const onPlayClick = () => {
    const playTracks = () => {
      setPlayText("Pause");
      setIsPlaying(true);
      Tone.Transport.start();
    };

    const pauseTracks = () => {
      setPlayText("Play");
      setIsPlaying(false);
      Tone.Transport.stop();
      Tone.Transport.position = "1:0:0";
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
        {Tone.Transport.position}
      </div>
    </footer>
  );
};
