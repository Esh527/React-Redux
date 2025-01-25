import React, { useState } from 'react'
import './reacthooks.css'

const ReactHooks = () => {
    const [data, setData] = useState(0);
    

    const onIncrement =()=>{
        setData(data+1);
    }

    const onDecrement =()=>{
        setData(data-1);
       
    }

const getColorClass =()=>{
    return data < 0 ? "red" : data === 0 ? "black": "green";
}
  return (
    <div>
      <h1 className={`value ${getColorClass()}`}>{data}</h1>
      <button onClick={onDecrement}>Click for Decrement</button>
      <button onClick={onIncrement}>Click for Increment</button>
      
    </div>
  )
}

export default ReactHooks
