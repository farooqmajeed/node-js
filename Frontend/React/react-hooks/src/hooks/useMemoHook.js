import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [counter, setCounter] = useState(0);
  const [toggleItem, setToggle] = useState(false);

  const getValue = () => {
    return setCounter(counter + 1);
  };

  const countNumber = (num) => {
    console.log("just run the counter delay");
    for (let i = 0; i < 100000000; i++) {}
    return num;
  };
  // here you can see the rerender item is called if there is no change in that item like toggle here
//   const checkData  = countNumber(counter);

  const checkData = useMemo(() => {
    return countNumber(counter);
  }, [counter]);
  return (
    <div>
         <header className="App-header">React Use Memo Hooks</header>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter Click
      </button>
      <div>here is the current counter value : {checkData} </div>

      <button onClick={() => setToggle(!toggleItem)}>
        {toggleItem ? "CLicked Before" : "Click After"}
      </button>
    </div>
  );
};
export default UseMemoHook;
