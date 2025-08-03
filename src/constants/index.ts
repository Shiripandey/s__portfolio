import type { TNavLink, TTechnology, TExperience, TTestimonial, TProject } from '../types';

import {
  mobile,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
{
  title: 'Software Developer',
  companyName: 'Solytics Partners',
  icon: tesla,// Make sure you have this icon imported or defined
  iconBg: '#0F172A', // You can change the color as you like
  date: 'Nov 2024 – Present',
  points: [
    'Delivered frontend stories on time, improving performance by 30% via efficient and optimized coding.',
    'Debugged 75+ critical issues across frontend/backend, enhancing stability by 60% and achieving 90%+ test coverage pre-deployment.',
    'Refactored 30+ UI components to improve reusability and scalability, cutting redundant code by 45% and speeding dev cycles by 25%.',
    'Worked with React, Redux, Elastic, Git, Django, NPM, Postman, Jira, MaterialUI, and Jenkins 4 to deliver high-performance applications.',
  ],
}
,
{
  title: 'MERN Stack Developer',
  companyName: 'Navodita Technologies',
  icon: tesla, // Replace with actual icon or keep as placeholder
  iconBg: '#1E293B',
  date: 'July 2023 - Feb 2024',
  points: [
    'Designed and developed a responsive and fully functional web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack.',
    'Built secure user authentication with JWT and implemented role-based access control for different user types.',
    'Integrated cloud image upload, item listing, and messaging functionality to enable smooth interactions between users.',
    'Used Redux for global state management and implemented Context API for lightweight state scenarios.',
    'Improved website performance and SEO using server-side rendering techniques and optimized frontend rendering.',
    'Collaborated with UI/UX designers to deliver a smooth user experience across all devices.',
  ],
}

];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Pushtak_kosh',
    description:
      'A web-based platform for exploring, purchasing, and reviewing coding and technology books, offering a curated collection for learners, developers, and tech enthusiasts',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/Shiripandey/BooksStore_website?tab=readme-ov-file',
  },
  {
    
  name: 'Drowsiness Detection ',
  description:
    ' It alerts the driver with an alarm when signs of fatigue are detected, helping to prevent accidents and ensure driver alertness.',
  tags: [
    {
      name: 'python',
      color: 'blue-text-gradient',
    },
    {
      name: 'opencv',
      color: 'green-text-gradient',
    },
    {
      name: 'dlib',
      color: 'pink-text-gradient',
    },
  ],
  image: jobit, // replace this with a relevant image if available
  sourceCodeLink: 'https://github.com/', // put actual GitHub repo if ready
},
{
  name: 'Hope_Link',
  description:
    'A MERN stack platform featuring Node.js for the backend, MongoDB with MongoDB Compass for data storage, and bcrypt for secure password hashing. ',
  tags: [
    {
      name: 'nodejs',
      color: 'blue-text-gradient',
    },
    {
      name: 'mongodb',
      color: 'green-text-gradient',
    },
    {
      name: 'css',
      color: 'pink-text-gradient',
    },
  ],
  image: tripguide, // Update this with a relevant image if needed
  sourceCodeLink: 'https://github.com/', // Replace with actual repo link
}
,
];

export { services, technologies, experiences, testimonials, projects };
