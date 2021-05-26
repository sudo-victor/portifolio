import { useState } from 'react';
import { SiJavascript, SiTypescript, SiNodeDotJs, SiReact, SiSass, SiExpo, SiNextDotJs } from 'react-icons/si';

import database from '../../data/database.json';
import styles from './skills.module.scss';

export default function Skills() {
  const [skills] = useState(database.skills);
  const Icon = {
    "Javascript": () => <SiJavascript color="#efefef" size={64}/>,
    "Typescript": () => <SiTypescript color="#efefef" size={64}/>,
    "Node.js": () => <SiNodeDotJs color="#efefef" size={64}/>,
    "ReactJS": () => <SiReact color="#efefef" size={64}/>,
    "Sass": () => <SiSass color="#efefef" size={64}/>,
    "Expo": () => <SiExpo color="#efefef" size={64}/>,
    "Next.JS": () => <SiNextDotJs color="#efefef" size={64}/>,
  } as any

  return (
    <section className={styles.skillsComponent} id="skills">
      <h2>Minhas Skills</h2>

      <div>

        {
          skills.map(skill => (
            <article key={skill.name}>
              <div style={{background: skill.color}}>
                {Icon[String(skill.name)]()}
              </div>
              <span>{skill.name}</span>
            </article>
           )
          )
        }

      </div>

    </section>

  )
}