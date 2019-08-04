import * as React from "react";

import { useEffect, useContext } from "react";

import { Track } from "./Track";
import { TrackManagerContext } from "../../App";

export type EditorBodyProps = {};

export const EditorBody: React.FC<EditorBodyProps> = props => {
  const tm = useContext(TrackManagerContext);

  return (
    <div className="editor-body">
      <Track trackNumber={1} />
      <Track trackNumber={2} />
    </div>
  );
};
