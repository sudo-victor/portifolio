import { useState } from 'react';
import Image from 'next/image';

import styles from './projects.module.scss';
import database from '../../data/database.json';

export default function Projects() {
  const [projects] = useState(database.projects);

  return (
    <section className={styles.projectsComponent} id="projects">
      <h2>Projetos</h2>
      <div className={styles.tags}>
        <button className={styles.activated}>HTML5/CSS3</button>
        <button>ReactJS</button>
        <button>Expo</button>
        <button>Node.JS</button>
      </div>

      <div className={styles.items}>
        {
          projects.map(project => (
            <article key={project.name} style={{ background: project.colorBackground}}>
              <img src={project.theme} />
            </article>
          ))
        }
        
      </div>
    </section>

  )
}