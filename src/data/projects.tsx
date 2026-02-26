import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
        <Button variant={"default"} size={"sm"}>
          Visit Website <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
          <Button variant={"default"} size={"sm"}>
            Github <ArrowUpRight className="ml-3 w-5 h-5" />
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
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  shadcn: { title: "ShadCN UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
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
  live: string;
};

const projects: Project[] = [
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/RITHISH2402/RITHISH2402",
    github: "https://github.com/RITHISH2402/RITHISH2402",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            My 3D Interactive Portfolio
          </TypographyP>
          <TypographyP className="font-mono">
            Welcome to my digital playground — where cybersecurity meets creative code.
            Built with Next.js, Spline 3D, Framer Motion and Tailwind CSS.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">3D Interactive Keyboard</TypographyH3>
          <p className="font-mono mb-2">
            Interactive 3D keyboard rendered on a webpage — pressing each keycap reveals a skill. Built with Spline.
          </p>
          <TypographyH3 className="my-4">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool. ✨
          </p>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Next.js, TypeScript, Tailwind CSS, Framer Motion, Spline, ShadCN UI
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            This site is not just a portfolio — it is a whole vibe. 🔐
          </p>
        </div>
      );
    },
  },
  {
    id: "ask-your-vet",
    category: "Web Application",
    title: "Ask Your Vet",
    src: "/assets/projects-screenshots/vet/landing.png",
    screenshots: ["landing.png"],
    live: "https://askyourvet.neocities.org/MAIN.WEB/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            ASK YOUR VET — Online Veterinary Consultation Platform
          </TypographyP>
          <TypographyP className="font-mono">
            A veterinary online consultation platform where pet owners can connect
            with professional vets online. Get expert advice for your pets from
            the comfort of your home. 🐾
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Online vet consultation booking</li>
            <li>Pet health advice and tips</li>
            <li>Clean and responsive UI</li>
            <li>Built with React and Tailwind CSS</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            React, Tailwind CSS, HTML
          </p>
        </div>
      );
    },
  },
];

export default projects;