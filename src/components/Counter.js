import React, { useContext } from "react";
import { counterCtx } from "../contexts/CounterContext";

const Counter = () => {
  const { counter, increaseCounter, decreaseCounter } = useContext(counterCtx);
  return (
    // <counterCtx.Consumer>
    //   {({ counter, increaseCounter, decreaseCounter }) => {
    //     return (
    <div>
      <h3>Counter value is {counter} </h3>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
    //     );
    //   }}
    // </counterCtx.Consumer>
  );
};

export default Counter;
