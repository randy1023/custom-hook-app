/* eslint-disable react/display-name */
import {memo} from "react";

/* eslint-disable react/prop-types */

export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volvi a renderizar");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});

