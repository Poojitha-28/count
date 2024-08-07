import React, { useState } from "react";

export default function Counter()
{
    const [count,SetCount]= useState(0);
    return(
        <div>
            <h1>Counter App</h1> 
            <p>Count: {count}</p>
            <button onClick={()=>{
                SetCount((prev)=>prev+1);
            }}>Increment</button>
            <button onClick={()=>{
                SetCount((prev)=>prev-1);
            }}>Decrement</button>
        </div>
    )
}