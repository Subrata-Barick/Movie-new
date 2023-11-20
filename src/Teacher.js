import React from 'react';

const Teacher = (props) => {
  return (
    <div>
   {props.data.map((value)=>{return value})}
    </div>
  )
}

export default Teacher;