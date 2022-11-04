
import React, {useLayoutEffect, useEffect, useRef} from 'react'

export default function UseLayoutEffectComponent() {
    const inputRef = useRef(null)
    useLayoutEffect(()=>{
    //    console.log('Use Layout') // use layout is called before use effect
                                      // called before the component is rendered // component will mount
        console.log(inputRef.current.value)                                      
    },[])

    useEffect(()=>{
//console.log("UseEffect") // called after everything is rendered
inputRef.current.value = "Hello"
    },[])

  return (
    <div>
    <input ref={inputRef} value="My Name" style={{width:400, height:100, borderColor:'black', borderWidth:5}}/>
    </div>
  )
}
