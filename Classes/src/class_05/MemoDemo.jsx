import React, { useState } from 'react'
import Memochild from './Memochild'
const MemoDemo = () => {
    let obj={
        id:1,
        name:"Vivek"
    }
    localStorage.setItem("user",JSON.stringify(obj))    
    let[count,setCount] = useState(0)
    let res=0
    for(let i=0;i<10000;i++){
        res+=i
    }

    return (
        <div>MemoDemo
            <h1>Result:{res}</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>++</button>
          <input type="text" />  <button
            ></button>
            <Memochild/>
        </div>
    )
}

export default MemoDemo