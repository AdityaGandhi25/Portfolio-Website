import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};
const projects: Project[] = [
  {
    id: "compex-2026",
    category: "Full Stack Event Management",
    title: "Comp-Ex 2026 (VCMDWA)",
    src: "/assets/projects-screenshots/project-1.png",
    screenshots: ["project-1.png"],
    github: "https://github.com/AdityaGandhi25/Compex-Ticket-Booking-Website",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            During a one-month internship, I engineered a comprehensive full-stack event management ecosystem for Compex 2026, central India's largest tech fair.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Impact & Features</TypographyH3>
          <p className="font-mono mb-2">
            Using React, Node.js, Express and MongoDB, I built a secure attendee registration portal, a real-time admin dashboard for live check-ins, and automated database scripts, ensuring a seamless and high-performance experience for both users and organizers.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/project-1.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "clearimpact",
    category: "Data-Driven Platform",
    title: "ClearImpact: NGO Transparency",
    src: "/assets/projects-screenshots/project-2.png",
    screenshots: ["project-2.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.postgres],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Built a data-driven donation platform to solve trust deficits in the nonprofit sector, utilizing Anandwan as a foundational case study.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Bridging the Gap</TypographyH3>
          <p className="font-mono mb-2">
            Architecting features to bridge the gap between financial contributions and ground-reality impact, ultimately improving internal financial management and scaling recurring donor support.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/project-2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "stock-forecast",
    category: "Financial Analysis & AI",
    title: "Stock Price Trend & Forecast Tool",
    src: "/assets/projects-screenshots/project-3-placeholder.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Built a Basic Python-based financial analysis script to fetch live market data and evaluate short-term stock trends using Moving Averages (MA10, MA20, EMA10).
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">ARIMA Forecasting</TypographyH3>
          <p className="font-mono mb-2">
            Implemented a baseline ARIMA time-series forecasting model to project next-day closing prices. Utilized AI development tools to generate and debug the Python logic. Tech Stack: Python (Pandas, Scikit-Learn), Statsmodels, yfinance API.
          </p>
        </div>
      );
    },
  },
  {
    id: "price-recommendation",
    category: "Browser Extension",
    title: "Product Price Recommendation",
    src: "/assets/projects-screenshots/project-4-placeholder.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.html],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.openai],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Currently developing a Product Pricing Recommendation browser extension using Python and OpenAI to analyze product data and deliver actionable pricing insights. (In Progress)
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Business Analytics Engine</TypographyH3>
          <p className="font-mono mb-2">
            By designing the core logic and leveraging AI tools for rapid prototyping and debugging, I am actively applying my academic knowledge of data structures to build a practical, real-world business analytics engine.
          </p>
        </div>
      );
    },
  },
];

export default projects;
