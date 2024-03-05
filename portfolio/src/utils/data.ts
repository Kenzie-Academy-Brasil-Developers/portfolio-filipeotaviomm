import { SiPostgresql, SiTypescript, SiDjango } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGit, FaPython } from "react-icons/fa";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  {
    title: "TS",
    img: SiTypescript,
  },
  {
    title: "React",
    img: FaReact,
  },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "PostgreSQL",
    img: SiPostgresql,
  },
  {
    title: "Python",
    img: FaPython,
  },
  {
    title: "Django",
    img: SiDjango,
  },
  {
    title: "Docker",
    img: FaDocker,
  },
  {
    title: "Git",
    img: FaGit,
  },
  {
    title: "Next",
    img: TbBrandNextjs,
  },
];

export const projectsData = [
  {
    id: 1,
    name: "Kenzie Burguer",
    photo: "/kenzie-burguer.jpg",
    stack: "Front End",
    techs: ["HTML, JavaScript, SCSS"],
    gitHub: "https://github.com/filipeotaviomm/Burguer-Kenzie",
    vercel: "https://hamburgueria-kenzie-filipeotaviomm.vercel.app/",
  },
  {
    id: 2,
    name: "Nu Kenzie",
    photo: "/nu-kenzie.jpg",
    stack: "Front End",
    techs: ["HTML, JavaScript, SCSS"],
    gitHub: "https://github.com/filipeotaviomm/Nu-Kenzie",
    vercel: "https://template-nu-kenzie-filipeotaviomm.vercel.app/",
  },
];
