import * as React from "react";

import "./Transport.scss";

export const Transport: React.FC = () => {
  return (
    <footer>
      <div className="transport-bar">
        <button className="btn loop-button">Loop</button>
        <button className="btn play-button">Play</button>
      </div>
    </footer>
  );
};
