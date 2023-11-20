import React from "react";
import { useState, useEffect } from "react";

const LearnUE = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const res = await get.json();

      setData(res);
      
    }
    getData();
  }, [state]);
  return (
    <div><h1 style={{border:"2px solid red",width:"50%",borderRadius:"12px",textAlign:"center"}}>Use of useEffect</h1>
      <button onClick={() => setState(state + 1)}>Click me{state}</button>
      {
        data.map((element,index)=>{
            return (
                <div key={index}>
                    <div  className="data">
                    
                    <ul>
                         <li>Title:-{element.title} :-</li>
                        <li style={{color:"blue"}}>Body:-{element.body}</li>
                    </ul>
                    </div>
                </div>
            )
        })
      }
    </div>
  );
};

export default LearnUE;
