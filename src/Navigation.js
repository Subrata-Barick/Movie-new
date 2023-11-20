import {Link,NavLink} from 'react-router-dom'
import './Navigation.css';

const Navigation = () => {
  const navLinkStyle=({isActive})=>{
    return{
      texrDecoration:isActive ? "none":"underline",
      color:isActive?'red':'white',
      fontSize:'25px'

    }
  }

  return (
    <div  >
      <div className='Hero'>
<NavLink to ={"/"}style={navLinkStyle}>Home</NavLink >
<NavLink to ={"/Contact"}style={navLinkStyle}>Contact</NavLink >
<NavLink to ={"/About"}style={navLinkStyle} >About</NavLink >
<NavLink to ={"/Moreinfo"}style={navLinkStyle} >Moreinfo</NavLink >
</div>
</div>
  )
}

export default Navigation;