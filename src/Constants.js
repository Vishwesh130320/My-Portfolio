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
  Airport,
  threejs,
  volansys,
  acldigital,
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
    title: "React Developer",
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
    company_name: "ACL Digital",
    icon: acldigital,
    iconBg: "#383E56",
    date: "June 2023 – August 2023",
    points: [
      "Developed a cross-platform (ios & Android) React Native app, achieving 30% improvement in user adoption and appointment conversion rate, featuring an intuitive UI for users to schedule, modify, and track appointments seamlessly.",
      "Built a secure role-based backend system using Node.js and MongoDB, resulting in 30% increase in appointment management efficiency.",
      "Successfully deployed ElasticSearch’s real-time indexing feature, optimizing backend system to promptly reflect data updates, leading to a 20% boost in appointment management efficiency within the expanded role-based system.",
      "Enhanced data security using JSON Web Tokens and OAuth, resulting in a 50% improvement in user data protection.",
      "Devised algorithm using Cron Jobs for 95% reduction in missed appointment notifications.",
      "Seamlessly integrated Google and Apple calendar APIs, enabling 100% automated appointment synchronization.",
    ],
  },

  {
    title: "Software Engineer Intern",
    company_name: "VOLANSYS",
    icon: volansys,
    iconBg: "#383E56",
    date: "july 2021 – December 2021",
    points: [
      "Built various prototype versions of Online marketplace web-app in different database settings using MERN stack.",
      "Optimized data mining & modeling workflows with Python automation, resulting in a 20% reduction in processing time.",
      "Pioneered the deployment of Node.js for optimized data processing, resulting a 40% boost in system efficiency.",
      "Enhanced fault-tolerance and scalability of application using messages and stream processing from topics in Kafka.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Anjali Creation",
    icon: AnjaliCreations,
    iconBg: "#E6DEDD",
    date: "January 2019 – July 2021",
    points: [
      "Architected an innovative Employee Management Software solution, utilizing Angular, TypeScript, Spring Boot, and PostgreSQL; leading to a 50% reduction in scheduling conflicts and a 15% increase in employee productivity.",
      "Devised and enforced an innovative solution for Material Management Software, leveraging React, TypeScript Spring Boot, and PostgreSQL, resulting in a 30% reduction in inventory holding costs and a 30% efficiency in overall supply chain.",
      "Created real-time updates using GraphQL subscriptions, resulting in a 60% decrease in manual errors in sales records.",
      "Resolved critical issues by optimizing back-end, 50% higher response time, and reduced 30% server load.,",
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
    description:
      "Web application  where programmers and developers can ask questions, share knowledge, and find solutions to coding and software development problems.",

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
    description:
      "It is an Uber Eats clone which is a popular food delivery platform that connects users with a wide range of restaurants, allowing them to order food and have it delivered conveniently to their doorstep.",
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
    name: "Airport Management System",
    description:
      "A secure web portal for an airport, providing access to airlines employees, airport employees, and general users based on their roles and permissions. The portal includes real-time flight information retrieval and management features for airlines employees and gate operations oversight for airport employees.",
    tags: [
      { name: "ReactJs", color: "blue-text-gradient" },
      { name: "NodeJs", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "AWS", color: "green-text-gradient" },
    ],
    image: Airport,
    source_code_link: "https://github.com/gopinathsjsu/team-project-team-16",
  },
];

export { services, technologies, experiences, projects };
