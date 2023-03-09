import React, { useCallback, useState } from "react";
import  Todos  from "./todos";

const CallBackHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);


  const addTodo = useCallback(() =>{
    setTodos((prev) => [...prev, "New Entry"]);
  },[todos]);

  const increament = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <header className="App-header">React useCallback Hooks</header>
      <Todos todos={todos} addTodo={addTodo} />
      <div>
        count:{count}
        <button onClick={increament}> +</button>
      </div>
    </div>
  );
};

export default CallBackHook;
