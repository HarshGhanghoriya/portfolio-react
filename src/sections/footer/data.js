import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';

const socials=[
    {id:1, link: '', icon: <AiOutlineInstagram/>},
    {id:2, link: '', icon: <AiOutlineLinkedin/>},
    {id:3, link: '', icon: <AiOutlineGithub/>},
    {id:4, link: '', icon: <AiOutlineTwitter/>}
]

const links=[
    {id: 1, link: "#", title: 'Home'},
    {id: 2, link: "#about", title: 'About'},
    {id: 3, link: "#services", title: 'Services'},
    {id: 4, link: "#portfolio", title: 'Portfolio'},
    {id: 5, link: "#contact", title: 'Contact'}
]

export {links, socials};