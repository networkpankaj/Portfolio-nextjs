import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Isuremedia from "@/public/Isuremedia.png";
import taskflowImg from "@/public/taskflowImg.png";
import devconnectImg from "@/public/devconnectImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Coding bootcamp",
    location: "Brillaint",
    description:
      "Learn Different skills...",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full Stack Developer",
    location: "Isuremedia",
    description:
      "At Isuremedia, I worked as a full-stack developer where I built a variety of web designs, landing pages, and CRM systems. I also took on manual testing responsibilities to ensure everything ran smoothly before deployment. It was a great hands-on experience that helped me sharpen both my frontend and backend skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  
  {
    title: "Senior Software Developer",
    location: "Codesource",
    description:
      "Head of the Software Development department, leading projects across web development, Android and iOS app development. Experienced in building intelligent chatbots and working with both Python and Java. Oversee and contribute to various projects while ensuring code quality and performance.",
    icon: React.createElement(FaReact),
    date: "2025 - Present",
    
  },
] as const;

export const projectsData = [
  {
    title: "Isuremedia",
    description: `
    - Business agency website  
    - WordPress + Elementor  
    - Clean and responsive design  
    - Service and project showcase  
    - GoHighLevel integration  
    - Client success highlights  
    - Focused on digital growth  
    `,
    tags: ["Wordpress", "Elementor"],
    imageUrl: Isuremedia,
  },  
  {
    title: "TaskFlow API",
    description: `
    - Backend task management API  
    - Built with FastAPI (Python)  
    - JWT-based auth system  
    - User registration & login  
    - Full CRUD on tasks  
    - PostgreSQL integration  
    - Input validation + Swagger docs  
    `,
    tags: ["Python", "FastAPI", "PostgreSQL"],
    imageUrl: taskflowImg,
  },  
  {
    title: "DevConnect",
    description: `
    - Full-stack social platform  
    - For devs to share projects & blogs  
    - Built with MERN stack  
    - Auth + profile management  
    - Post creation & commenting  
    - Responsive, modern UI  
    `,
    tags: ["Node.js", "Express", "React", "MongoDB"],
    imageUrl: devconnectImg,
  }
  ,
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Java",
  "MySQL",
  "PostgreSQL",
  "C++"
] as const;
