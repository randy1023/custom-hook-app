import { memo } from "react";

export const Small = memo(({ counter }) => {
  console.log("Me volvi a regenerar");
  return <small>{counter}</small>;
});
