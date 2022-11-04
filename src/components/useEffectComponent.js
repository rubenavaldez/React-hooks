import axios from 'axios';
import React, {useEffect, useState} from 'react'

export default function UseEffectComponent() {
    const [data, setData] =useState("")
    const [count, setCount] = useState(0)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
      console.log('API was called')
      setData(response.data[3].email)

    })
//    console.log('page has loaded') // changing the state will re render the page 
  },[count]); // now use effect will run every time the count is created
      const handleClick = (e) => {
      setCount(count +1)
      };
  // https://www.youtube.com/watch?v=LlvBzyy-558 31:34
  return (
    <div>
      <h1>Use effect</h1>
      <p>{data}</p>
      <p>{count}</p>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}
