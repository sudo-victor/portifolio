import { SiJavascript, SiTypescript, SiNodeDotJs, SiReact, SiSass, SiExpo, SiNextDotJs, SiHtml5, SiCss3 } from 'react-icons/si';

type IconSkillProps = {
  name: "Javascript" | "Typescript" | "Node.js" | "ReactJS" | "HTML5" | "CSS3" | "Sass" | "Expo" | "Next.JS";
  size: number;
}

export default function IconSkill({ name, size }: IconSkillProps) {
  const Icons = {
    "Javascript": ( size: number ) => <SiJavascript color="#efefef" size={size}/>,
    "Typescript": ( size: number ) => <SiTypescript color="#efefef" size={size}/>,
    "Node.js": ( size: number ) => <SiNodeDotJs color="#efefef" size={size}/>,
    "ReactJS": ( size: number ) => <SiReact color="#efefef" size={size}/>,
    "HTML5": ( size: number ) => <SiHtml5 color="#efefef" size={size}/>,
    "CSS3": ( size: number ) => <SiCss3 color="#efefef" size={size}/>,
    "Sass": ( size: number ) => <SiSass color="#efefef" size={size}/>,
    "Expo": ( size: number ) => <SiExpo color="#efefef" size={size}/>,
    "Next.JS": ( size: number ) => <SiNextDotJs color="#efefef" size={size}/>,
  };

  return (
    <>
      {Icons[name](size)}
    </>
  )
}
