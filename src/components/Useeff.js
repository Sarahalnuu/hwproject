import React, { useEffect, useState } from 'react'

export default function Useeff() {
    const [counter, setCounter] = React.useState(0)
    console.log("Hooks Demo");

    useEffect(() => {
        console.log("useEffct");
    }) 
    console.log("out");
  return (
    <div>
        <button onClick={()=> setCounter(counter + 1)}>click 0 </button>
    </div>
  )
}
