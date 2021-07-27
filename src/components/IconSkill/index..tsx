import {
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiReact,
  SiSass,
  SiExpo,
  SiNextDotJs,
  SiHtml5,
  SiCss3,
  SiLinux,
  SiAngular,
  SiDotNet,
  SiCsharp,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";

type IconSkillProps = {
  name:
    | "Javascript"
    | "Typescript"
    | "C#"
    | ".Net"
    | "Node.js"
    | "ReactJS"
    | "Angular"
    | "HTML5"
    | "CSS3"
    | "Sass"
    | "Expo"
    | "Next.JS";
  size: number;
};

export default function IconSkill({ name, size }: IconSkillProps) {
  const Icons = {
    Javascript: (size: number) => <SiJavascript color="#efefef" size={size} />,
    Typescript: (size: number) => <SiTypescript color="#efefef" size={size} />,
    "C#": (size: number) => <SiCsharp color="#efefef" size={size} />,
    ".Net": (size: number) => <SiDotNet color="#efefef" size={size} />,
    "Node.js": (size: number) => <SiNodeDotJs color="#efefef" size={size} />,
    ReactJS: (size: number) => <SiReact color="#efefef" size={size} />,
    Angular: (size: number) => <SiAngular color="#efefef" size={size} />,
    HTML5: (size: number) => <SiHtml5 color="#efefef" size={size} />,
    CSS3: (size: number) => <SiCss3 color="#efefef" size={size} />,
    Sass: (size: number) => <SiSass color="#efefef" size={size} />,
    Expo: (size: number) => <SiExpo color="#efefef" size={size} />,
    "Next.JS": (size: number) => <SiNextDotJs color="#efefef" size={size} />,
    Scrum: (size: number) => <DiScrum color="#efefef" size={size} />,
    Linux: (size: number) => <SiLinux color="#efefef" size={size} />,
  };

  return <>{Icons[name](size)}</>;
}
