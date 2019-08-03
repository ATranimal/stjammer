import * as React from "react";

import { useEffect, useContext, createContext } from "react";

import { TrackManager } from "./services/TrackManager";

import { EditorBody } from "./components/body/EditorBody";
import { Transport } from "./components/shared/Transport";

import "./styles/index.scss";

export const TrackManagerContext = createContext(new TrackManager());

const App: React.FC = () => {
  const trackManager = new TrackManager();

  return (
    <div className="App">
      <TrackManagerContext.Provider value={trackManager}>
        <EditorBody />
        <Transport />
      </TrackManagerContext.Provider>
    </div>
  );
};

export default App;
