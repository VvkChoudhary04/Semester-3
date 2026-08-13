// import React, { useReducer } from 'react'

// const UseReducer = () => {

//     function reducer(state, action) {
//         if (action.type === "add") {
//             return state + 1
//         } else if (action.type === "sub") {
//             return state - 1
//         } else if (action.type === "reset") {
//             return 0
//         }
//     }

//     let [state, dispatch] = useReducer(reducer, 0)

//     return (
//         <div>
//             <h1>{state}</h1>
//             <button onClick={() => dispatch({type:"add"})}>++</button>
//             <button onClick={() => dispatch({type:"sub"})}>--</button>
//             <button onClick={() => dispatch({type:"reset"})}>Reset</button>
//         </div>
//     )
// }

// export default UseReducer

//////////////////////////////////////////////////// TO DO LIST //////////////////
import React, { useReducer } from 'react'

const UseReducer = () => {
      let data={
        input:"",
        list:[]
    }
    function reducer(state,action){
        if(action.type=="inp"){
            return{
                ...state,
                input:action.payload
            }

        }
        else if(action.type=="add"){
            return{
               ...state,
               list:[...state.list , state.input],
               input:""
            }

        }
    }

let [state,dispatch] = useReducer(reducer,data)
  return (
    <div>
    <input  onChange={(e)=>dispatch({type:"inp",payload:e.target.value})}/>
    <button onClick={()=> dispatch({type:"add"})}>Add Task</button>
    {
        state.list.map((a)=>{
              return(<>
                <li>{a}</li>
                </>)
        })
    }
    </div>
  )
}

export default UseReducer
