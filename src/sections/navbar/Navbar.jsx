import './navbar.css'
import Logo from "../../assets/logo.jpg";
import data from "./data";
import { IoIosColorPalette } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav>
      <div className='container nav-container'>
          <a href='index.html' className='nav-logo'>
            <img src={Logo} className='img'/>
          </a>
          <ul className='nav-menu'>
              {
              data.map((item)=>(<li key={item.id}><a href={item.link}>{item.title}</a></li>))
              }
          </ul>
          <button id='theme-icon'><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar
