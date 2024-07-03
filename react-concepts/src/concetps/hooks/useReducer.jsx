// Manages state using a reducer function, useful for complex state logic.
import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {

  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // below dispatch function calling to the reducer function . it will take to parameters based on that checking the condition 
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button> 
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>x
    </div>
  );
}

export default Counter;
