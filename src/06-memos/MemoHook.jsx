import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let index = 0; index < iterationNumber; index++) {
    console.log("Ahi vamos....");
  }
  return `iteration ${iterationNumber} time`;
};
export const MemoHook = () => {
  const { counter, increment } = useCounter(1);
  const [show, setShow] = useState(true);
  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter:
        <small>{counter}</small>
      </h1>

      <hr />
      <h4>{memorizeValue}</h4>
      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
