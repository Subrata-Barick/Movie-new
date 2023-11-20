import React,{useContext} from 'react';
import { Theme } from '../App';

const Third = () => {
    const Themeapp=useContext(Theme)
  return (
    <div className='comp3'>
    <div>Third</div>
    <h3>{Themeapp.data}</h3>
    <h3>name:-{Themeapp.name.name}</h3>
    <h3>age:-{Themeapp.name.age}</h3>
    </div>
  )
}

export default Third