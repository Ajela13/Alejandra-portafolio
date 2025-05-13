// src/data/projects.js
import wtwr from "../assets/wtwr.png";
import mlearn from "../assets/mlearnp.png";
import contactCenter from "../assets/contactCenter.png";
import aroundTheUS from "../assets/aroundTheUS.png";

export const projects = [
  {
    id: 1,
    name: "What to Wear",
    description:
      "A weather-based clothing recommendation web app that allows users to add, like, and delete clothing items depending on the weather. It integrates with the OpenWeatherMap API and supports user authentication.",
    technologies: [
      "React|JavaScript|CSS|HTML|Vite|OpenWeatherMap API|MongoDB|Express.js|Node.js",
    ],
    image: wtwr,
  },
  {
    id: 2,
    name: "Educational ML Platform",
    description:
      "A web platform that helps users learn the basics of machine learning through visual examples and theory. It allows dataset downloads from OpenML, supports user authentication, and includes interactive posts.",
    technologies: [
      "React|JavaScript|Node.js|Express.js|MongoDB|OpenML API|CSS",
    ],
    image: mlearn,
  },
  {
    id: 3,
    name: "Contact Center Dashboard",
    description:
      "A dashboard to monitor contact center agents and customers in real time using WebSockets. Provides periodic data updates and displays agent status and customer queues.",
    technologies: ["JavaScript|Node.js|WebSockets|CSS|HTML"],
    image: contactCenter,
  },
  {
    id: 4,
    name: "Around the US",
    description:
      "Around The U.S. is a responsive web app for managing user profiles and interactive image cards, with features like editing, liking, deleting, and real-time updates.",
    technologies: ["HTML5 | CSS3 | JavaScript (ES6) | Webpack | Babel "],
    image: aroundTheUS,
  },
  //   {
  //     name: "CRUD App with Ruby on Rails",
  //     description:
  //       "A basic CRUD application built with Ruby on Rails, enabling users to create, read, update, and delete posts. Focused on backend functionality and routing.",
  //     technologies: ["Ruby", "Ruby on Rails", "HTML", "CSS"],
  //   },
];
