import "./about.css";
import AboutImage from "../../assets/about.jpg";
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi';
import Card from "../../components/Card";
import data from './data';

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-left">
          <div className="about-portrait">
            <img src={AboutImage} className="img" alt="About Image" />
          </div>
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <div className="about-cards">
            {data.map((item)=>(
            <Card key={item.id} className="about-card">
              <span className="about-card-icon">{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>))}
          </div>
          <p>
            Hi there! I'm JITESH KUMAR SHIVGAN, a passionate frontend developer with strong skills in <b>ReactJS</b>. I graduated from the prestigious Indian Institute of Technology (IIT) Kharagpur. I have a deep understanding of modern web technologies, including HTML, CSS, and JavaScript, and I'm particularly proficient in utilizing the power of ReactJS to develop responsive and interactive web applications. Through my projects, I've gained hands-on experience in building dynamic user interfaces, optimizing performance, and ensuring cross-browser compatibility.
          </p>
          <p> In my free time, you can find me exploring the outdoors, hiking mountains, and seeking inspiration from nature's beauty. I am a certified Mountaineer too from Atal Bihari Vajpayee Institute of Mountaineering and Allied Sports, Manali (H.P) </p>
          <a href={CV} download className="btn primary">Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  );
};

export default About;
