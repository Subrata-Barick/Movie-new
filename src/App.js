import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Learnstate from './Learnstate';
import Color from './Color';
import Moreinfo from './Moreinfo';
import Error from './Error';
import Insta from './Insta';
import Mail from './Mail';
import { useState,createContext } from 'react';
import First from './ContextApi/First';
import Third from './ContextApi/Third';
import Second from './ContextApi/Second';




const Theme= createContext();
function App() {
 
  let Teacher = [
    {
      name: "Soumya shankar sharma",
      age: 28,
      classs: "react",
    },
    {
      name: "Ratikanta Barick",
      age: 33,
      classs: "math",
    },
    {
      name: "Sirshamaya mahapatra",
      age: 48,
      classs: "english",
    },
  ];
  
  const navLinkStyle=({isActive})=>{
    return{
      texrDecoration:isActive ? "none":"underline",
      color:isActive?'red':'white',
      fontSize:'25px'

    }
  }
  let login=true;



  //study about context api(file name -first,second,third);--->
  const[data,setData]=useState('Babu')
  const[name,setName]= useState({name:'rahul',age:25})
  
  return (
    <div>
      <div>
      <BrowserRouter>
       <Routes>
      <Route Component={Home} path="/">
      <Route Component={Contact} path="/Contact"></Route>
      <Route Component={About} path="/About"></Route>
      <Route Component={Moreinfo}path="/Moreinfo">
        <Route Component={Insta} path='Insta'/>
        <Route Component={Mail} path='Mail'/></Route>
      <Route path='*' Component={Error}/>
      </Route>
     
      </Routes>
      </BrowserRouter>
        </div>
        <div>
{
  login==false? <Learnstate />  :<h2>I AM ALWAYS BLESSD BY LORD RADHA</h2>
}

</div>
  
<Color/>

 
<div>
  <Theme.Provider value={{data,name}}>
 <Third/>
  </Theme.Provider>
</div>

<div>
<Second/>
</div>




      </div>

    
  );
}

export default App;
export {Theme}
