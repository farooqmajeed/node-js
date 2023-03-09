import React from 'react'

export const Todos = (props) => {
  return (
    <div>
        <h1> Add Todos</h1>
        {
        props?.todos?.map((todo, index) =>{
            return <div key={index}>
                <p>todo  {index}</p>
            </div>
        })
        }
        <button onClick={props.addTodo}> Add Todo</button>
        
        </div>
  )
}
