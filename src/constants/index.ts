import type {
  TNavLink,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// ✅ Navigation links
export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// ✅ Services for the landing section
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

// ✅ Technologies used
const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

// ✅ Work experience timeline
const experiences: TExperience[] = [
  {
    title: "Software Developer",
    companyName: "Solytics Partners",
    icon: tesla,
    iconBg: "#0F172A",
    date: "Nov 2024 – Present",
    points: [
      "Delivered frontend stories on time, improving performance by 30% via efficient and optimized coding.",
      "Debugged 75+ critical issues across frontend/backend, enhancing stability by 60%.",
      "Refactored 30+ UI components to improve reusability and scalability.",
      "Worked with React, Redux, Django, Jenkins, and more.",
    ],
  },
  {
    title: "MERN Stack Developer",
    companyName: "Navodita Technologies",
    icon: tesla,
    iconBg: "#1E293B",
    date: "July 2023 - Feb 2024",
    points: [
      "Built a full MERN stack web app.",
      "Implemented JWT authentication, cloud uploads, and messaging.",
      "Utilized Redux and Context API for state management.",
    ],
  },
];

// ✅ Testimonials from clients (optional section)
const testimonials: TTestimonial[] = [
  {
    testimonial: "Beautiful website like our product...",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Client-focused web developer...",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "50% traffic increase after optimization...",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// ✅ Project showcase
const projects: TProject[] = [
  {
    name: "Pushtak_kosh",
    description:
      "A bookstore web app for tech and coding books with review and buying options.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Shiripandey/BooksStore_website",
  },
  {
    name: "Drowsiness Detection",
    description:
      "Driver alert system using OpenCV and dlib to detect signs of fatigue.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "dlib", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/", // Replace when ready
  },
  {
    name: "Hope_Link",
    description:
      "A secure MERN stack platform for item sharing using bcrypt, JWT, and image uploads.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/", // Replace when ready
  },
];

// ✅ Export all for use across the app
export { services, technologies, experiences, testimonials, projects };
