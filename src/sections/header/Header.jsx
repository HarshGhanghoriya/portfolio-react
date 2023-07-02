import './header.css'
import HeaderImage from '../../assets/header.jpg';
import data from './data';

const Header = () => {
  return (
    <header id="header">
      <div className="container header-container">
        <div className='header-profile'>
          <img src={HeaderImage} alt='Header potrait' className='img'></img>
        </div>
        <h3>Jitesh Kumar Shivgan</h3>
        <p>A very enthusiastic, energetic Frontend/ReactJS developer who hike mountains during vacations</p>
        <div className="header-cta">
          <a href='#contact' className='btn primary'>Let's Talk</a>
          <a href='#portfolio' className='btn light'>My Work</a>
        </div>
        <div className="header-socials">
          {
          data.map((item)=><a href={item.link} key={item.id} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
