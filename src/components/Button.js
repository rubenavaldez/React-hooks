import React, {useState, forwardRef, useImperativeHandle} from 'react'
                        // forwardRef  accepts ref from a parent component 
const Button =forwardRef((props,ref)=> {
  const [toggle, setToggle] = useState(false)
  useImperativeHandle(ref,()=>({
    alterToggle(){
        setToggle(!toggle)
    }
  }))
    return (
    <>
      <button
      onClick={()=>{setToggle(!toggle)}}
      >
        Button From child
      </button>
      {toggle && <span>Toggle</span>}
    </>
  )
})

export default Button;