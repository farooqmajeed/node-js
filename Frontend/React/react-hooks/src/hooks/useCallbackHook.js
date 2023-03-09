import React, {useCallback, useState} from 'react'
import { Todos } from './todos';

const CallBackHook = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) =>{
        setTodos((prev) => [...prev, 'New Entry'])
    }

  return (
    <div>
        <header className="App-header">
        React useCallback Hooks
      </header>
        <Todos todos={todos} addTodo={addTodo}/>
    
    </div>
  )
}

export default CallBackHook