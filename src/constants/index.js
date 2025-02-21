export const navList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
];

export const items = [
  {id: 1, name: 'HTML', image: '/images/html.svg'},
  {id: 2, name: 'CSS', image: '/images/css3.svg'},
  {id: 3, name: 'JavaScript', image: '/images/javascript.svg'},
  {id: 4, name: 'Sass', image: '/images/sass.svg'},
  {id: 5, name: 'Tailwind', image: '/images/tailwind.svg'},
  {id: 6, name: 'React', image: '/images/react.svg'}
]


import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const footerLinks = [
  {id: 1, Icon: FaInstagram, name: '', url:'https://www.instagram.com/_troyyzzz_/'},
  {id: 2, Icon: FaLinkedin, name: '', url:'https://www.linkedin.com/in/tevin-campbell/'},
];

export const projectList = [
  {
    id:1,
    title: "Solarite",
    description:
      "Solarite is a web application designed to streamline solar panel services in Los Angeles.Built with Reactjs, Vite, Tailwind, and Supabase.",
    codeUrl: "https://github.com/chingu-voyages/v52-tier2-team-25/tree/main/solarite",
    liveUrl: "https://v52-tier2-team-25.vercel.app/"
  },
  {
    id: 2,
    title: "Me365.shop",
    description:
      "An engaging and user-friendly merch store built for YouTuber ME365. Features include dynamic product displays, secure checkout, and responsive design for an optimal shopping experience on any device.",
    codeUrl: "https://github.com/Troyzhenny/me365-shop",
    liveUrl: "https://me365-shop.vercel.app/"
  },
  {
    id: 3,
    title: "Windows 11",
    description:
      "A responsive recreation of the Windows 11 interface built with React and CSS, featuring interactive UI elements and a sleek design for a seamless user experience",
    codeUrl: "https://github.com/Troyzhenny/win11ui",
    liveUrl: ""
  },
  {
    id: 4,
    title: "Portfolio v.1",
    description:
      "A modern, responsive portfolio website built to showcase my skills in web development and UI/UX design. Built from scratch using React, CSS, and Vite.",
    codeUrl: "https://github.com/Troyzhenny/devfolio",
    liveUrl: "https://tevintc.xyz/"
  },
];
