import React, {useMemo, useState} from 'react';


export const useMemoHook = () => {
    const [counter, setCounter] = useState(0);
    const [toggleItem, setToggle] = useState(false);
  return (
    <div>useMemoHook</div>
  )
}
