import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import amazonImg from "@/public/Amazon.png";
import weatherImg from "@/public/weather.png";
import ecommerceImg from "@/public/ecommerce.png";

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
    location: "Online",
    description:
      "Learn Different skills...",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Anywhere",
    description:
      "I worked as a front-end developer . I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Home",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Amazon",
    description:
      "I worked as a full-stack developer on this project. Users can give public feedback to companies.",
    tags: ["React","Javascript", "Firebase" ],
    imageUrl: amazonImg,
  },
  {
    title: "Weather",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: [ "Javascript", "Next.js", "Tailwind"],
    imageUrl: weatherImg,
  },
  {
    title: "E-commerce",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Javascript",  "Tailwind","React"],
    imageUrl: ecommerceImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Framer Motion",
] as const;
