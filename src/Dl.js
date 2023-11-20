import { useState,useEffect } from "react";
import { json } from "react-router-dom";

let Dl=()=>{
    const[data,setData]=useState([]);
    useEffect(()=>{
        async function loop(){
            const get=await fetch('https://jsonplaceholder.typicode.com/albums');
            const set=await get.json();
            setData(set)
        }
        loop();
    },[])
    return(

        <div>
                {data.map((value,index)=>{
                return(
                    <div key={index}>
                      <ul>
                      <li>{value.title}</li>
                  </ul>
                  </div>
                )
                    
                })}    
        </div>
    );


}
export default Dl;
