import "./about.css";
import AboutImage from "../../assets/about-me.jpg";
import CV from "../../assets/CV.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import { data, skills } from "./data";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about-container">
        <div className="about-left">
          <div className="about-portrait" data-aos="fade-right">
            <img src={AboutImage} className="img" alt="About Image" />
          </div>
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <div className="about-cards">
            {data.map((item) => (
              <Card key={item.id} className="about-card">
                <span className="about-card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hi there! I'm <b> Harsh Ghanghoriya, </b> a passionate frontend
            developer with strong skills in <b>ReactJS/VueJS</b>. I graduated
            from the prestigious{" "}
            <b style={{ color: "var(--color-primary)" }}>
              Madhav Institute of Technology (MITS) Gwalior{" "}
            </b>
            . I have a deep understanding of{" "}
            <b>
              modern web technologies, including HTML, CSS, and JavaScript,
              Reactjs, VueJS, NextJs, NuxtJS
            </b>
            .
          </p>
          <p>
            I'm particularly proficient in utilizing the{" "}
            <b> power of ReactJS/VueJS </b> to develop responsive and interactive web
            applications. Through my projects, I've gained hands-on experience
            in building{" "}
            <b>
              {" "}
              dynamic user interfaces, optimizing performance, and ensuring
              cross-browser compatibility and SEO optimization.
            </b>
          </p>
          <p>
            {" "}
            In my free time, i used to read about finance and investments. I am a{" "}
            <b>certified Upstox Subbroker partner too </b> with UPSTOX PVT. LMT.{" "}
          </p>
          <div className="skills-button" data-aos="zoom-in">
            {skills.map((skill) => (
              <button className="skill-button" key={skill.id}>
                <span className="skill-icon" style={skill.style}>
                  {skill.icon}
                </span>
                <h5>{skill.title}</h5>
              </button>
            ))}
          </div>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
