import React, { useEffect, useState } from 'react'


const Second = () => {
  
//  const[count,setCount]=useState(0);
const[width,setWidth]=useState(window.screen.width);
const actualwidth=()=>{
  console.log(window.innerWidth);
  setWidth(window.innerWidth)
}
useEffect(()=>{
  window.addEventListener('resize',actualwidth)
  return()=>{
    window.removeEventListener('resize',actualwidth)
  }

})

  
 /* const fisss=()=>{
    setCount(count+1)
  }
  useEffect(()=>{
    if(count>= 1){
      document.title=`chats(${count})
      ` }else{
        document.title=`chats `
      }
    
  },[count])*/
 
  return (
    <div className='Sec2'>
      <h1>{width}</h1>
    
    </div>
  )
}

export default Second