import React, { useState } from 'react'
import Moviesss from './Moviesss';
import Header from './Header';
import Dl from './Dl';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';


const Home = () => {
const[click,setClick]=useState(false);


let phone=()=>{
  setClick(!click)
}
let mobile=()=>{
  setClick(false)
}

  return (
    <div>
       <Navigation/>
      <Outlet/>
      <div>
        
     
       <Moviesss/>

    </div>
    
       <div>
      <button onClick={phone}>Click me</button>
        <button onClick={mobile}>click me to remove</button>
       {click && <Dl/>}
       </div>
    </div>
  )
}

export default Home;