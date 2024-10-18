import Image1 from "../../assets/project1.png";
import Image2 from "../../assets/project2.jpg";
import Image3 from "../../assets/project3.jpg";
import Image4 from "../../assets/project3.jpg";
import Portfolio from "../../assets/portfolio-harsh.png";
import { SiAgora } from "react-icons/si";
import Evident from "../../assets/evident-capital.png";
import WhiteBoard from "../../assets/whiteboard.png";
import TranZact from "../../assets/tranzact-india.png";
import Chatting from "../../assets/chatting-app.png";
import Elchemy from "../../assets/elchemy.png";
import Image5 from "../../assets/project5.jpg";
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { SiFirebase } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandNpm } from "react-icons/tb";
import { SiPaytm } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { SiSocketdotio } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { SiQuasar } from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";

const data = [
  {
    id: Math.floor(Math.random() * 1000),
    category: "ReactJS",
    image: Image1,
    title: "HCL HEALTH CARE",
    desc: "HCL Healthcare provides end-to-end healthcare solutions with a vision to make corporate India a healthier place. We deliver personalized, sustainable, and managed health care solutions to organizations across sectors including technology, banking, community health, real estate and education. The organisation has delivered healthcare services to more than 5,00,000 customers under the able execution of 800+ experienced personnel for corporate and in-clinic operations.",
    demo: "https://ehealthcart.healthyhcl.in/",

    tech: [
      {
        id: 1,
        icon: <RiReactjsLine />,
        title: "ReactJS",
        style: { color: "rgb(0,221,253)" },
      },
      {
        id: 2,
        icon: <SiJavascript />,
        title: "JavaScript",
        style: { color: "rgb(255,223,0)" },
      },
      {
        id: 3,
        icon: <DiHtml5 />,
        title: "HTML5",
        style: { color: "rgb(229,76,33)" },
      },
      {
        id: 4,
        icon: <FaCss3 />,
        title: "CSS3",
        style: { color: "rgb(38,77,228)" },
      },
      {
        id: 6,
        icon: <SiPaytm />,
        title: "Paytm Gateway",
        style: { color: "rgb(0, 186, 242)" },
      },
      {
        id: 7,
        icon: <TbBrandRedux />,
        title: "Redux",
        style: { color: "rgb(119,73,189)" },
      },
      {
        id: 5,
        icon: <BsGit />,
        title: "Git",
        style: { color: "rgb(240,80,51)" },
      },
      {
        id: 8,
        icon: <TbBrandNpm />,
        title: "NPM",
        style: { color: "rgb(204,53,52)" },
      },
    ],
  },
  {
    id: 4,
    category: "QUASAR JS",
    image: Evident,
    title: "Invest in Alternatives Empower with Impact",
    desc: "Elchemy provides custom chemical manufacturing services. It provides solutions related to all categories like oil and gas, personal care, health and pharma and home care",
    demo: "https://www.evident.capital/",
    github: "",
    tech: [
      {
        id: 1,
        icon: <SiQuasar />,
        title: "Quasar JS",
        style: { color: "rgb(44, 130, 201)" },
      },
      {
        id: 11212,
        icon: <FaVuejs />,
        title: "Vue JS",
        style: { color: "rgb(46, 204, 113)" },
      },
      {
        id: 2,
        icon: <SiJavascript />,
        title: "JavaScript",
        style: { color: "rgb(255,223,0)" },
      },
      {
        id: 3,
        icon: <DiHtml5 />,
        title: "HTML5",
        style: { color: "rgb(229,76,33)" },
      },
      {
        id: 4,
        icon: <FaCss3 />,
        title: "CSS3",
        style: { color: "rgb(38,77,228)" },
      },
      {
        id: 5,
        icon: <BsGit />,
        title: "Git",
        style: { color: "rgb(240,80,51)" },
      },
      {
        id: 8,
        icon: <TbBrandNpm />,
        title: "NPM",
        style: { color: "rgb(204,53,52)" },
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 1000),
    category: "NextJS",
    image: Elchemy,
    title: "Innovating Global Chemical Trade with Technology-Driven Excellence",
    desc: "Elchemy provides custom chemical manufacturing services. It provides solutions related to all categories like oil and gas, personal care, health and pharma and home care",
    demo: "https://el-fe.antino.ca/",
    github: "",
    tech: [
      {
        id: 1,
        icon: <TbBrandNextjs />,
        title: "NextJS",
        style: { color: "rgb(0,0,0)" },
      },
      {
        id: 2,
        icon: <SiJavascript />,
        title: "JavaScript",
        style: { color: "rgb(255,223,0)" },
      },
      {
        id: 3,
        icon: <DiHtml5 />,
        title: "HTML5",
        style: { color: "rgb(229,76,33)" },
      },
      {
        id: 4,
        icon: <FaCss3 />,
        title: "CSS3",
        style: { color: "rgb(38,77,228)" },
      },
      {
        id: 5,
        icon: <BsGit />,
        title: "Git",
        style: { color: "rgb(240,80,51)" },
      },
      {
        id: 8,
        icon: <TbBrandNpm />,
        title: "NPM",
        style: { color: "rgb(204,53,52)" },
      },
      {
        id: Math.floor(Math.random() * 1000),
        icon: <SiFramer />,
        title: "Framer Motion",
        style: { color: "rgb(0,0,0)" },
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 1000),
    category: "NuxtJs",
    image: TranZact,
    title: "TranZact -  Easiest software for MSME manufacturers",
    desc: "TranZact's mission is to empower Indian SME manufacturers with the power of digital. We want to make data and technology accessible to them easily. And that's why we built a software which solves end-to-end business problems for SMEs with the most simple, effortless automation.",
    demo: "https://letstranzact.com/",
    github: "",
    tech: [
      {
        id: 1,
        icon: <SiNuxtdotjs />,
        title: "Nuxt JS",
        style: { color: "rgb(46, 204, 113)" },
      },
      {
        id: 2,
        icon: <SiJavascript />,
        title: "JavaScript",
        style: { color: "rgb(255,223,0)" },
      },
      {
        id: 3,
        icon: <DiHtml5 />,
        title: "HTML5",
        style: { color: "rgb(229,76,33)" },
      },
      {
        id: 4,
        icon: <FaCss3 />,
        title: "CSS3",
        style: { color: "rgb(38,77,228)" },
      },
      {
        id: 5,
        icon: <BsGit />,
        title: "Git",
        style: { color: "rgb(240,80,51)" },
      },
      {
        id: 8,
        icon: <TbBrandNpm />,
        title: "NPM",
        style: { color: "rgb(204,53,52)" },
      },
      {
        id: 83423,
        icon: <FaBootstrap />,
        title: "Bootstrap",
        style: { color: "rgb(102, 51, 153)" },
      },
      {
        id: 834232323,
        icon: <TbBrandNpm />,
        title: "TryStack UI",
        style: { color: "rgb(204,53,52)" },
      },
      {
        id: Math.floor(Math.random() * 1000),
        icon: "Stack",
        title: "TryStack UI",
        style: { color: "rgb(204,53,52)" },
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 1000),
    category: "ReactJS",
    image: Portfolio,
    title: "React Portfolio",
    desc: "Built a completely responsive portfolio using ReactJS 18, React Hooks, with theme customization feature, carousels with SwiperJS, Animate on scroll library.",
    demo: "",
    github: "https://github.com/HarshGhanghoriya/portfolio-react",
    tech: [
      {
        id: 1,
        icon: <RiReactjsLine />,
        title: "ReactJS",
        style: { color: "rgb(0,221,253)" },
      },
      {
        id: 2,
        icon: <SiJavascript />,
        title: "JavaScript",
        style: { color: "rgb(255,223,0)" },
      },
      {
        id: 3,
        icon: <DiHtml5 />,
        title: "HTML5",
        style: { color: "rgb(229,76,33)" },
      },
      {
        id: 4,
        icon: <FaCss3 />,
        title: "CSS3",
        style: { color: "rgb(38,77,228)" },
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 1000),
    category: "Vanilla Javascript",
    image: WhiteBoard,
    title: "Student Whiteboard",
    desc: "This project offers an extensive feature set, including screen recording capabilities, multiple pages for seamless lesson organization, image libraries(20) for easy access to teaching resources, and canvas drawing tools for enhanced interactivity. Whiteboard is equipped with a suite of mathematical tools, making it an ideal platform for teaching and explaining complex mathematical concepts. Teachers can effortlessly create and annotate mathematical equations with latency of 2ms",
    demo: "https://whiteboard-service-0emv.onrender.com/",
    github: "",
    tech: [
      {
        id: 2,
        icon: <SiJavascript />,
        title: "JavaScript",
        style: { color: "rgb(255,223,0)" },
      },
      {
        id: 3,
        icon: <DiHtml5 />,
        title: "HTML5",
        style: { color: "rgb(229,76,33)" },
      },
      {
        id: 4,
        icon: <FaCss3 />,
        title: "CSS3",
        style: { color: "rgb(38,77,228)" },
      },
      {
        id: 5,
        icon: <SiSocketdotio />,
        title: "Web Sockets",
        style: { color: "rgb(38,77,228)" },
      },
    ],
  },

  {
    id: Math.floor(Math.random() * 1000),
    category: "ReactJS",
    image: Chatting,
    title: "Firebase Chatting App",
    desc: "A simple application to provide chatting facility and connect with your friends privately. It is based upon FIRBASE which provide seamless E2E connection. This app also supports notifications",
    demo: "https://harsh-chat.netlify.app/",
    github: "",
    tech: [
      {
        id: 2,
        icon: <SiJavascript />,
        title: "JavaScript",
        style: { color: "rgb(255,223,0)" },
      },
      {
        id: 3,
        icon: <DiHtml5 />,
        title: "HTML5",
        style: { color: "rgb(229,76,33)" },
      },
      {
        id: 4,
        icon: <FaCss3 />,
        title: "CSS3",
        style: { color: "rgb(38,77,228)" },
      },
      {
        id: Math.floor(Math.random() * 1000),
        icon: <SiFirebase />,
        title: "Firebase",
        style: { color: "rgb(255,203,45)" },
      },
      {
        id: Math.floor(Math.random() * 1000),
        icon: <SiAgora />,
        title: "Agora SDk",
        style: { color: "rgb(229,76,33)" },
      },
    ],
  },
];

export default data;
