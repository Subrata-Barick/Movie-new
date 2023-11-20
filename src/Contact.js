import React, { useState } from "react";
import LearnUE from "./LearnUE";








const Contact = () => {
 



  const[num,setNum]=useState(0);
function inc(){
  setNum(num+1);
}
function dec(){
  setNum(num-2);
}
let[color,setColor]=useState("");
function col(e){
  setColor(e.target.value)
}

  return (
    <div>
      
      <h1>use state hook</h1>

      <div className="main1">
        <h2 className="heading1">{num}</h2>
        <div className="buttons">
        <button className="btn" onClick={inc} >click to increment</button>
        <button className="btn" onClick={dec}>click to decrement</button>
        </div>
      </div>


<div><div  style={{background:color,height:"300px",width:"400px",border:"2px solid white",borderRadius:"12px",margin:"20px"}}>{color}</div>
  <input type="text"placeholder="WRITE A COLOR NAME" value={color} onChange={col}/>
</div>
<div>
  <LearnUE/>
</div>


    </div>
  );
};

export default Contact;
