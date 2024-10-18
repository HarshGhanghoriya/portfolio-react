import "./header.css";
import HeaderImage from "../../assets/dashboard-harsh.jpeg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import { useEffect } from "react";
import { HiDownload } from "react-icons/hi";
import CV from "../../assets/CV.pdf";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header-container">
        <div className="header-profile" data-aos="flip-up">
          <img src={HeaderImage} alt="Header potrait" className="img"></img>
        </div>
        <h3 data-aos="fade-up">Harsh Ghanghoriya</h3>
        <p data-aos="fade-up" style={{ fontFamily: "cursive" }}>
        <b> Frontend Eng. at Evident Capitals (at present) </b><br/>
          A very enthusiastic, proficient and skilled{" "}
          <b> Frontend/ReactJS/VueJs dev (Exp. 2+ years)</b> who is passionately working for
          cutting edge technology
        </p>
        <div className="header-cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
        <div className="header-socials">
          {data.map((item) => (
            <a
              href={item.link}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
