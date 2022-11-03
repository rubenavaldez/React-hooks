import React, {useReducer} from 'react'
// import React, {useState} from 'react'

export default function ReducerApp() {
    // const [count, setCount]=useState(0)
    const reducer =(state, action)=>{
        switch(action.type){
            case "INCREMENT":
                return {count: state.count +1, showText: state.showText};
            case "toggleShowText":
                return {count: state.count, showText:!state.showText};
            default:
                return state;    
        }
    }

    const [state, dispatch] =useReducer(reducer,{count:0, showText:true})
    const handleClick= (e)=>{
        dispatch({type: 'INCREMENT'})
        dispatch({type: 'toggleShowText'})

    }
  return (
    <>
      <h1>{state.count}</h1>

        <button onClick={handleClick}>
            increment
        </button>
        {state.showText && <p>This is text</p>}
    </>
  )
}
