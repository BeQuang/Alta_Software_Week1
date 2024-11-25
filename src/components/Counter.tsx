import { useReducer } from "react";

type CounterState = {
  count: number;
};
type UpdateAction = {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
};
type ResetAction = {
  type: "RESET";
  payload: number;
};
type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET", payload: 0 })}>
        Reset
      </button>
    </>
  );
};

export default Counter;
