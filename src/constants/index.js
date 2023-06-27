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
  AnjaliCreations,
  stackOverFlow,
  munchmonkey,
  tripguide,
  threejs,
  volansys,
} from "../src/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Competitive Programmer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "VOLANSYS",
    icon: volansys,
    iconBg: "#383E56",
    date: "June 2021 – October 2021",
    points: [
      "Built various prototype versions of Online marketplace web-app in different database settings using MERN stack.",
      "Designed a simplified yet an elegant UI interface for prototypes by utilizing Material UI and Bootstrap components.",
      "Enhanced fault-tolerance and scalability of application using messages and stream processing from topics in Kafka.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Anjali Creation",
    icon: AnjaliCreations,
    iconBg: "#E6DEDD",
    date: "January 2021 – June 2021",
    points: [
      "Provided solution for managing the textile weaving industry (Material Management Software) using React, JavaScript,Spring Boot and PostgreSQL.",
      "Helpful to keep a record of weaved goods, to sell goods, and generate bills or delivery tickets automatically.",
      "Solved critical issues such as Optimizing back-end for faster responses and various point of sales.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "StackOverflow Clone",
    description: "",

    tags: [
      { name: "ReactJs", color: "blue-text-gradient" },
      { name: "NodeJs", color: "green-text-gradient" },
      { name: "Redis", color: "pink-text-gradient" },
      { name: "Kafka", color: "blue-text-gradient" },
      { name: "AWS", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
    ],
    image: stackOverFlow,
    source_code_link: "https://github.com/Vishwesh130320/StackOverflow",
  },
  {
    name: "Munch Monkey",
    description: "",
    tags: [
      { name: "ReactJs", color: "blue-text-gradient" },
      { name: "NodeJs", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "Kafka", color: "blue-text-gradient" },
      { name: "AWS", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: munchmonkey,
    source_code_link: "https://github.com/Vishwesh130320/MunchMonkey",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];
//Changes
export { services, technologies, experiences, projects };
