import { useCallback, useState, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);
  useEffect(() => {}, [increment]);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };
  return (
    <>
      <h1>UseCallBack hook:{counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
