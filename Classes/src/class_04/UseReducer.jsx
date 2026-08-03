import React, { useReducer } from 'react'

const UseReducer = () => {

    function reducer(state, action) {
        if (action.type === "add") {
            return state + 1
        } else if (action.type === "sub") {
            return state - 1
        } else if (action.type === "reset") {
            return 0
        }
    }

    let [state, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({type:"add"})}>++</button>
            <button onClick={() => dispatch({type:"sub"})}>--</button>
            <button onClick={() => dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}

export default UseReducer
