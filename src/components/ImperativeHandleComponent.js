import React, {useRef} from 'react'
import Button from "./Button"

export default function ImperativeHandleComponent() {
    const buttonRef = useRef(null)
  return (
    <div>
        {/* using ref, call a function inside a child component */}
    <button onClick={()=>{buttonRef.current.alterToggle()}}>Button from Parent</button>
    {/* pass reference to a child */}
    <Button ref={buttonRef}/>
    </div>
  )
}
