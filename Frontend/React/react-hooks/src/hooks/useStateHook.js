import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>use State Hook</h1>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}
