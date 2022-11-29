import React, { createContext, useState } from "react";

export const counterCtx = createContext(0);
counterCtx.displayName = "Counter";

const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  const value = { counter, increaseCounter, decreaseCounter };
  return (
    <counterCtx.Provider value={value}>{props.children}</counterCtx.Provider>
  );
};

export default CounterContextProvider;
