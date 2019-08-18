import * as React from "react";

import { useEffect, useContext, createContext } from "react";

import { EditorBody } from "./components/body/EditorBody";
import { Transport } from "./components/transport/Transport";

import Tone from "tone";

import "./styles/index.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <EditorBody />
      <Transport />
    </div>
  );
};

export default App;
