import * as React from "react";

import { EditorBody } from "./components/body/EditorBody";
import { Transport } from "./components/shared/Transport";

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
