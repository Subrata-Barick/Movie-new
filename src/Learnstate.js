import React, {useState } from 'react';

const Learnstate = () => {
  let Decorate={color:"blue", width:"100px",height:"50px",fontWeight:"bolder", };

let newTime=new Date().toLocaleTimeString();

    const[Count,setCount]= useState(newTime);
    const Nothing=()=>{
      let newcTime=new Date().toLocaleTimeString();
      setCount( newcTime)
    }
    

  return (
    <div>
      <h2>TIME: {Count}</h2>
     <button style={Decorate} onClick={Nothing}>Click me</button>
      
    </div>
  )
}

export default Learnstate;