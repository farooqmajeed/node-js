import React, {useState, useRef, useEffect} from 'react';


const useRefHook = () => {
    const [ count, setCount ] = useState();
    const [data,setData]=useData("");

    useEffect(() =>{
        setCount(count + 1);
    })

  return (
    <>
    <header className="App-header">React useRef Hooks</header>
    <input 
    value={data}
    onChange={(e) => setData(e.target.value)}
    />
    <h1> counter is `${count}`</h1>
    </>
    
  )
}

export default useRefHook