import React from "react";
import { counterCtx } from "../contexts/CounterContext";

const ComponentB = () => {
  return (
    <counterCtx.Consumer>
      {({ counter }) => {
        return (
          <div>
            <h2>Component {counter}</h2>
          </div>
        );
      }}
    </counterCtx.Consumer>
  );
};

export default ComponentB;
