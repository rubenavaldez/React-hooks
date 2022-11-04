import React,{useRef} from 'react'
// used to reference a dom element
export default function UseRefHookComponent() {
    const inputRef = useRef(null)
const onClick=()=>{
    // console.log(inputRef.current.value) // the current value // the value
    
    // built in method
    inputRef.current.focus() // redirects to the input ref
    inputRef.current.value=""; // this will clear the input value
}

  return (
    <div>
      <h1>Ref Hook</h1>
      <input type={"text"} placeholder={"..name"} ref={inputRef} />
      <button onClick={onClick}>Change name</button>
    </div>
  );
}

