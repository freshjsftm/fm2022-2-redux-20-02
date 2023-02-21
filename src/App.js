import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment({}));
  const handleDecrement = () => dispatch(decrement({}));
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
