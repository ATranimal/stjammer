import * as React from "react";

import { useEffect, useState } from "react";
import { testFunction } from "../../services/tonejs";

import "./Track/track.scss";

export const Track: React.FC = () => {
  const [oscillator, setOscillator] = useState(null);

  useEffect(() => {
    testFunction();
  }, []);
  return <div className="track">Audio Track</div>;
};
