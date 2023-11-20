import React from 'react';
import {Link,Outlet} from "react-router-dom"

const Moreinfo = () => {
  return (
    <div>
     
       <Link to={'Insta'}><h3>Contact via Instagram</h3></Link>
       <Link to={'Mail'}><h3>Contact via Mail</h3></Link>
       <Outlet/>
    </div>
  )
}

export default Moreinfo;