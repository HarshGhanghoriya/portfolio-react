import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import CV from "assets/CV.pdf";

const data = [
  { id: 1, icon: <HiOutlineMail />, link: "mailto:ghanghoriyaharsh@gmail.com" },
  { id: 2, icon: <FaWhatsapp />, link: "https://wa.me/+919340720040" },
  { id: Math.floor(Math.random() * 1000), icon: <FaDownload />, link: CV },
];

export default data;
